'use strict';

// eslint-disable-next-line import/no-unresolved -- workspace devDep, but the resolver can't see it from this scope
const tsParser = require('@typescript-eslint/parser');
const { RuleTester } = require('eslint');
const rule = require('./no-callback-render-in-navigator');

// ESLint 9 RuleTester expects flat-config shape: parser + parserOptions move into languageOptions.
const ruleTester = new RuleTester({
  languageOptions: {
    parser: tsParser,
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run('no-callback-render-in-navigator', rule, {
  valid: [
    {
      code: `
        <>
          <Tab.Screen component={HomeScreen} />
          <Stack.Screen component={HomeScreen} />
        </>
      `,
    },
  ],
  invalid: [
    {
      code: `
        <>
          <Tab.Screen>
            {() => <HomeScreen />}
          </Tab.Screen>
          <Stack.Screen>
            {() => <HomeScreen />}
          </Stack.Screen>
        </>
      `,
      errors: [
        // Error for the Tab component
        {
          messageId: 'avoidCallbackRender',
        },
        // Error for the Stack component
        {
          messageId: 'avoidCallbackRender',
        },
      ],
    },
  ],
});
