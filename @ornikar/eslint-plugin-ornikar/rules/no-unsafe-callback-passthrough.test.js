'use strict';

const { RuleTester } = require('eslint');
const rule = require('./no-unsafe-callback-passthrough');

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});

ruleTester.run('no-unsafe-callback-passthrough', rule, {
  valid: [
    // 1. Uses indexed access type from component props
    {
      code: `
        interface ButtonProps { onPress: (e: Event) => void }
        interface Props { onPress: ButtonProps['onPress'] }
        function Comp({ onPress }: Props) {
          return <Button onPress={onPress} />;
        }
      `,
    },
    // 2. Wrapped in arrow function
    {
      code: `
        interface Props { onPress: () => void }
        function Comp({ onPress }: Props) {
          return <Button onPress={() => onPress()} />;
        }
      `,
    },
    // 3. Function type with parameters
    {
      code: `
        interface Props { onPress: (event: GestureResponderEvent) => void }
        function Comp({ onPress }: Props) {
          return <Button onPress={onPress} />;
        }
      `,
    },
    // 4. PressableProps['onPress'] (indexed access)
    {
      code: `
        interface PressableProps { onPress: (e: Event) => void }
        interface Props { onPress: PressableProps['onPress'] }
        function Comp({ onPress }: Props) {
          return <Pressable onPress={onPress} />;
        }
      `,
    },
    // 5. No type annotation (unresolvable — skip)
    {
      code: `
        function Comp({ onPress }) {
          return <Button onPress={onPress} />;
        }
      `,
    },
    // 6. Pick type (unresolvable — skip)
    {
      code: `
        interface Props extends Pick<ButtonProps, 'onPress'> {}
        function Comp({ onPress }: Props) {
          return <Button onPress={onPress} />;
        }
      `,
    },
    // 7. Non-event prop (doesn't match on[A-Z])
    {
      code: `
        interface Props { renderItem: () => void }
        function Comp({ renderItem }: Props) {
          return <FlatList renderItem={renderItem} />;
        }
      `,
    },
    // 9. Callback expression (not identifier passthrough)
    {
      code: `
        interface Props { onPress: () => void }
        function Comp({ onPress }: Props) {
          return <Button onPress={(e) => onPress()} />;
        }
      `,
    },
    // 10. Variable with no explicit type annotation
    {
      code: `
        function Comp() {
          const handler = () => {};
          return <Button onPress={handler} />;
        }
      `,
    },
    // 11. Local variable typed as () => void (not a prop passthrough)
    {
      code: `
        function Comp() {
          const handler: () => void = () => {};
          return <Button onPress={handler} />;
        }
      `,
    },
  ],

  invalid: [
    // 1. Destructured prop with () => void, passed to Button
    {
      code: `
        interface Props { onPress: () => void }
        function Comp({ onPress }: Props) {
          return <Button onPress={onPress} />;
        }
      `,
      errors: [
        {
          messageId: 'unsafePassthrough',
          data: { propName: 'onPress', componentName: 'Button' },
          suggestions: [
            {
              messageId: 'wrapInArrow',
              data: { identifierText: 'onPress' },
              output: `
        interface Props { onPress: () => void }
        function Comp({ onPress }: Props) {
          return <Button onPress={() => onPress()} />;
        }
      `,
            },
          ],
        },
      ],
    },
    // 2. Props object access with () => void
    {
      code: `
        interface Props { onPress: () => void }
        function Comp(props: Props) {
          return <Button onPress={props.onPress} />;
        }
      `,
      errors: [
        {
          messageId: 'unsafePassthrough',
          data: { propName: 'onPress', componentName: 'Button' },
          suggestions: [
            {
              messageId: 'wrapInArrow',
              data: { identifierText: 'props.onPress' },
              output: `
        interface Props { onPress: () => void }
        function Comp(props: Props) {
          return <Button onPress={() => props.onPress()} />;
        }
      `,
            },
          ],
        },
      ],
    },
    // 3. Type alias instead of interface
    {
      code: `
        type Props = { onPress: () => void }
        function Comp({ onPress }: Props) {
          return <Pressable onPress={onPress} />;
        }
      `,
      errors: [
        {
          messageId: 'unsafePassthrough',
          data: { propName: 'onPress', componentName: 'Pressable' },
        },
      ],
    },
    // 4. Intersection type where one member has () => void
    {
      code: `
        interface Base { onPress: () => void }
        type Props = Base & { label: string }
        function Comp({ onPress }: Props) {
          return <ListItem onPress={onPress} />;
        }
      `,
      errors: [
        {
          messageId: 'unsafePassthrough',
          data: { propName: 'onPress', componentName: 'ListItem' },
        },
      ],
    },
    // 5. Inline object type
    {
      code: `
        function Comp({ onPress }: { onPress: () => void }) {
          return <Button onPress={onPress} />;
        }
      `,
      errors: [
        {
          messageId: 'unsafePassthrough',
          data: { propName: 'onPress', componentName: 'Button' },
        },
      ],
    },
    // 7. Various on* handler names
    {
      code: `
        interface Props { onClose: () => void; onRefresh: () => void }
        function Comp({ onClose, onRefresh }: Props) {
          return (
            <>
              <Modal onClose={onClose} />
              <List onRefresh={onRefresh} />
            </>
          );
        }
      `,
      errors: [
        {
          messageId: 'unsafePassthrough',
          data: { propName: 'onClose', componentName: 'Modal' },
        },
        {
          messageId: 'unsafePassthrough',
          data: { propName: 'onRefresh', componentName: 'List' },
        },
      ],
    },
    // 8. Member expression component name (Actions.Button)
    {
      code: `
        interface Props { onPress: () => void }
        function Comp({ onPress }: Props) {
          return <Actions.Button onPress={onPress} />;
        }
      `,
      errors: [
        {
          messageId: 'unsafePassthrough',
          data: { propName: 'onPress', componentName: 'Actions.Button' },
        },
      ],
    },
    // 9. Renamed destructured prop
    {
      code: `
        interface Props { onPress: () => void }
        function Comp({ onPress: handlePress }: Props) {
          return <Button onPress={handlePress} />;
        }
      `,
      errors: [
        {
          messageId: 'unsafePassthrough',
          data: { propName: 'onPress', componentName: 'Button' },
          suggestions: [
            {
              messageId: 'wrapInArrow',
              data: { identifierText: 'handlePress' },
              output: `
        interface Props { onPress: () => void }
        function Comp({ onPress: handlePress }: Props) {
          return <Button onPress={() => handlePress()} />;
        }
      `,
            },
          ],
        },
      ],
    },
    // 10. () => Promise<void>
    {
      code: `
        interface Props { onPress: () => Promise<void> }
        function Comp({ onPress }: Props) {
          return <Button onPress={onPress} />;
        }
      `,
      errors: [
        {
          messageId: 'unsafePassthrough',
          data: { propName: 'onPress', componentName: 'Button' },
        },
      ],
    },
    // 11. DOM element (lowercase) with () => void
    {
      code: `
        interface Props { onClick: () => void }
        function Comp({ onClick }: Props) {
          return <div onClick={onClick} />;
        }
      `,
      errors: [
        {
          messageId: 'unsafePassthrough',
          data: { propName: 'onClick', componentName: 'div' },
        },
      ],
    },
  ],
});
