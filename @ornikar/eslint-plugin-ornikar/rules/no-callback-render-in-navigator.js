'use strict';

exports.meta = {
  type: 'suggestion',
  docs: {
    description: 'Warn against the use of callback render pattern in navigators and advise using the component prop',
    category: 'Best Practices',
  },
  messages: {
    avoidCallbackRender:
      'Avoid using callback render pattern in navigators as it can cause rerender issues when changing screens. Use the `component` prop instead.',
  },
};

exports.create = (context) => {
  return {
    JSXIdentifier(node) {
      if (node.name === 'Screen' && node.parent.parent.selfClosing === false) {
        if (
          node.parent.parent.parent.children.some(
            (child) => child.type === 'JSXExpressionContainer' && child.expression.type === 'ArrowFunctionExpression',
          )
        ) {
          context.report({
            node,
            messageId: 'avoidCallbackRender',
          });
        }
      }
    },
  };
};
