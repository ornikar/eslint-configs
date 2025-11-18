'use strict';

const { RuleTester } = require('eslint');
const rule = require('./forbid-kitt-colors-token');

const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('forbid-kitt-colors-token', rule, {
  valid: [
    {
      code: `
      <View backgroundColor="kitt.bumper.*" />
    `,
    },
    {
      code: `
      <View borderColor="kitt.bumper.*" />
    `,
    },
    {
      code: `
      <View borderLeftColor="kitt.bumper.*" />
    `,
    },
    {
      code: `
      <View borderRightColor="kitt.bumper.*" />
    `,
    },
    {
      code: `
      <View borderTopColor="kitt.bumper.*" />
    `,
    },
    {
      code: `
      <View borderBottomColor="kitt.bumper.*" />
    `,
    },
  ],
  invalid: [
    {
      code: `
      <View backgroundColor="kitt.primary" />
    `,
      errors: [
        {
          messageId: 'forbidden',
        },
      ],
    },
    {
      code: `
      <View borderColor="kitt.primary" />
    `,
      errors: [
        {
          messageId: 'forbidden',
        },
      ],
    },
    {
      code: `
      <View borderTopColor="kitt.primary" />
    `,
      errors: [
        {
          messageId: 'forbidden',
        },
      ],
    },
    {
      code: `
      <View borderBottomColor="kitt.primary" />
    `,
      errors: [
        {
          messageId: 'forbidden',
        },
      ],
    },
    {
      code: `
      <View borderRightColor="kitt.primary" />
    `,
      errors: [
        {
          messageId: 'forbidden',
        },
      ],
    },
    {
      code: `
      <View borderLeftColor="kitt.primary" />
    `,
      errors: [
        {
          messageId: 'forbidden',
        },
      ],
    },
  ],
});
