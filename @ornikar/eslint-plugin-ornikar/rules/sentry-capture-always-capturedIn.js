'use strict';

exports.meta = {
  type: 'problem',

  docs: {
    description: 'Force sentry captureMessage and captureException to have extra.capturedIn property',
    category: 'Best Practices',
    recommended: true,
  },

  messages: {
    noExtraCapturedInProperty: 'Add extra.capturedIn property',
  },
};

const calleeNames = ['captureException', 'captureMessage'];
const sentryRNImportName = '@sentry/react-native';

exports.create = ({ report, sourceCode }) => {
  const searchForPropertyName = (objectExpressionNode, propertyName) => {
    let objectExpression;
    objectExpressionNode.properties.forEach((property) => {
      if (property.key.type === 'Identifier' && property.key.name === propertyName) {
        objectExpression = property.value;
      }
    });
    return objectExpression;
  };

  const checkCallExpressionArguments = (callExpressionArguments) => {
    const secondArgs = callExpressionArguments.arguments[1];
    if (!secondArgs) {
      report({ node: callExpressionArguments, messageId: 'noExtraCapturedInProperty' });
      return;
    }

    if (secondArgs.type === 'ObjectExpression') {
      const extraObjectExpression = searchForPropertyName(secondArgs, 'extra');

      if (!extraObjectExpression || extraObjectExpression.type !== 'ObjectExpression') {
        report({ node: callExpressionArguments, messageId: 'noExtraCapturedInProperty' });
      }

      const extraCapturedInObjectExpression = searchForPropertyName(extraObjectExpression, 'capturedIn');

      if (!extraCapturedInObjectExpression) {
        report({ node: callExpressionArguments, messageId: 'noExtraCapturedInProperty' });
      }
    }
  };

  return {
    ImportDeclaration: (node) => {
      if (node.source.type === 'Literal' && node.source.value === sentryRNImportName) {
        node.specifiers.forEach((specifier) => {
          if (specifier.type === 'ImportNamespaceSpecifier' && specifier.local.type === 'Identifier') {
            sourceCode.getScope(specifier).references.forEach((reference) => {
              if (
                reference.identifier.type === 'Identifier' &&
                reference.identifier.parent.type === 'MemberExpression'
              ) {
                const memberExpression = reference.identifier.parent;

                if (memberExpression.parent.type === 'CallExpression') {
                  checkCallExpressionArguments(memberExpression.parent);
                }
              }
            });
          }
          if (
            specifier.type === 'ImportSpecifier' &&
            specifier.local.type === 'Identifier' &&
            calleeNames.includes(specifier.local.name)
          ) {
            const methodName = specifier.local.name;
            sourceCode.getScope(specifier).references.forEach((reference) => {
              if (
                reference.identifier.type === 'Identifier' &&
                reference.identifier.parent.type === 'CallExpression' &&
                reference.identifier.name === methodName
              ) {
                checkCallExpressionArguments(reference.identifier.parent);
              }
            });
          }
        });
      }
    },
  };
};
