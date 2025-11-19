'use strict';

exports.meta = {
  type: 'problem',

  docs: {
    description: 'Forbid kitt color tokens except kitt.bumper.*',
    category: 'Best Practices',
    recommended: true,
  },

  messages: {
    forbidden: 'kitt color tokens are forbidden, use kitt.bumper.* instead.',
  },
};

const colorProps = [
  'backgroundColor',
  'borderColor',
  'borderLeftColor',
  'borderRightColor',
  'borderTopColor',
  'borderBottomColor',
];

exports.create = (context) => {
  const checkColorValue = (valueNode, stringValue) => {
    // Check if it's a kitt token but not kitt.bumper.*
    if (stringValue.startsWith('kitt.') && !stringValue.startsWith('kitt.bumper.')) {
      context.report({
        node: valueNode,
        messageId: 'forbidden',
      });
    }
  };

  return {
    JSXAttribute(node) {
      const propName = node.name && node.name.name;

      if (!colorProps.includes(propName)) {
        return;
      }

      const { value } = node;

      // Handle literal strings like backgroundColor="kitt.primary"
      if (value && value.type === 'Literal' && typeof value.value === 'string') {
        checkColorValue(node, value.value);
      }

      // Handle JSX expressions like backgroundColor={isOk ? "kitt.primary" : "kitt.bumper.*"}
      if (value && value.type === 'JSXExpressionContainer') {
        const checkExpression = (expr) => {
          if (expr.type === 'Literal' && typeof expr.value === 'string') {
            checkColorValue(node, expr.value);
          } else if (expr.type === 'ConditionalExpression') {
            // Check both branches of ternary
            checkExpression(expr.consequent);
            checkExpression(expr.alternate);
          }
        };

        checkExpression(value.expression);
      }
    },
  };
};
