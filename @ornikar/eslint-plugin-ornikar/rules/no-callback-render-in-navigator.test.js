'use strict';

const { RuleTester } = require('eslint');
const rule = require('./no-callback-render-in-navigator');

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
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
