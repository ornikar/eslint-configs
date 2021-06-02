'use strict';

// https://github.com/ornikar/learner-webapp/issues/1036
// Keep same naming for test ids
const forbidDomAndComponentsProps = [
  { propName: 'data-test', message: 'Use data-testid' },
  { propName: 'data-test-id', message: 'Use data-testid' },
  { propName: 'data-test-class', message: 'Use data-testid' },
];

module.exports = {
  rules: {
    /* added rules */

    // Code style following our guidelines: https://ornikar.atlassian.net/wiki/spaces/TECH/pages/855016043/Guide+Typescript#Cr%C3%A9ation-d%E2%80%99un-composant
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'function-expression',
      },
    ],

    // Prevent direct mutation of this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': [
      'error',
      {
        noSortAlphabetically: true,
        reservedFirst: true,
        shorthandFirst: true,
        callbacksLast: true,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
    'react/sort-prop-types': [
      'error',
      {
        noSortAlphabetically: true,
        requiredFirst: false,
        callbacksLast: true,
      },
    ],

    /* changed rules */

    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          'getters',
          'setters',
          'instance-methods',
          '/^(on|handle).+$/',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'state',
            'constructor',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
    'react/forbid-dom-props': [
      'error',
      {
        forbid: forbidDomAndComponentsProps,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    'react/forbid-component-props': [
      'error',
      {
        forbid: forbidDomAndComponentsProps,
      },
    ],

    // // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': [
      'error',
      {
        // Allow Typography.{tag}
        ignore: ['h1', 'h2', 'h3', 'h4', 'h5', 'div', 'span', 'p', 'section'],
      },
    ],

    /* disabled rules */

    // https://github.com/yannickcr/eslint-plugin-react/issues/1009
    'react/require-default-props': 'off',

    // disable force destructuring for state and props
    'react/destructuring-assignment': 'off',

    // project should use babel-plugin-transform-react-remove-prop-types
    'react/forbid-foreign-prop-types': 'off',

    // autofix handles quotes incorrectly
    'react/jsx-curly-brace-presence': 'off',

    // disable enforcing state in constructor
    'react/state-in-constructor': 'off',

    'react/static-property-placement': 'off',

    // allow props spreading
    'react/jsx-props-no-spreading': 'off',
  },
};
