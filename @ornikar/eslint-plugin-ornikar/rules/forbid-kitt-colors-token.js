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
  return {
    JSXAttribute(node) {
      const propName = node.name && node.name.name;

      if (!colorProps.includes(propName)) {
        return;
      }

      const { value } = node;

      if (value && value.type === 'Literal' && typeof value.value === 'string') {
        const colorValue = value.value;

        // Check if it's a kitt token but not kitt.bumper.*
        if (!colorValue.startsWith('kitt.bumper.')) {
          context.report({
            node,
            messageId: 'forbidden',
          });
        }
      }
    },
  };
};
