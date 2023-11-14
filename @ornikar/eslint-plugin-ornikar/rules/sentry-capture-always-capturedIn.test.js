'use strict';

const { RuleTester } = require('eslint');
const rule = require('./sentry-capture-always-capturedIn');

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('sentry-capture-always-capturedIn', rule, {
  valid: [
    {
      code: "captureMessage('test', { extra: { capturedIn: 'path' } });",
    },
    {
      code: "captureException('test', { extra: { capturedIn: 'path' } });",
    },
    {
      code: `
        import { captureMessage } from '@sentry/react-native'
        captureException('test', { extra: { capturedIn: 'path' } });
      `,
    },
    {
      code: `
        import * as Blob from '@sentry/react-native'
        Blob.captureException('test', { extra: { capturedIn: 'path' } });
      `,
    },
    {
      code: `
        import * as Blob from 'test'
        Blob.captureException('test', { extra: { test: 1 } });
      `,
    },
  ],
  invalid: [
    {
      code: `
        import * as Sentry from '@sentry/react-native'
        Sentry.captureException('test', { extra: { test: 1 } });
      `,
      errors: [
        {
          messageId: 'noExtraCapturedInProperty',
        },
      ],
    },
    {
      code: `
        import * as Plouf from '@sentry/react-native'
        Plouf.captureException('test');
      `,
      errors: [
        {
          messageId: 'noExtraCapturedInProperty',
        },
      ],
    },
    {
      code: `
        import { captureMessage } from '@sentry/react-native'
        captureMessage('test', { extra: { test: 1 } });
      `,
      errors: [
        {
          messageId: 'noExtraCapturedInProperty',
        },
      ],
    },
  ],
});
