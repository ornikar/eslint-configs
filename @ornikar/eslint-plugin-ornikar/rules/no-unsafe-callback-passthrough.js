'use strict';

exports.meta = {
  type: 'problem',

  docs: {
    description: 'Disallow unsafe callback passthrough to JSX event handler props',
    category: 'Best Practices',
    recommended: true,
  },

  hasSuggestions: true,

  messages: {
    unsafePassthrough:
      'Unsafe callback passthrough to "{{propName}}" on <{{componentName}}>. ' +
      'The callback is typed as () => void but the target component may call it with event arguments at runtime. ' +
      'Either use the target component\'s prop type (e.g., ComponentProps["{{propName}}"]) or wrap in an arrow function.',
    wrapInArrow: 'Wrap in arrow function: () => {{identifierText}}()',
  },

  schema: [],
};

exports.create = (context) => {
  const sourceCode = context.sourceCode || context.getSourceCode();

  function getJSXElementName(jsxOpeningElement) {
    const nameNode = jsxOpeningElement.name;
    if (nameNode.type === 'JSXIdentifier') {
      return nameNode.name;
    }
    if (nameNode.type === 'JSXMemberExpression') {
      return sourceCode.getText(nameNode);
    }
    return null;
  }

  function isDOMElement(jsxOpeningElement) {
    const nameNode = jsxOpeningElement.name;
    if (nameNode.type === 'JSXMemberExpression') {
      return false;
    }
    if (nameNode.type === 'JSXIdentifier') {
      return /^[a-z]/.test(nameNode.name);
    }
    return false;
  }

  function findEnclosingFunction(node) {
    let current = node.parent;
    while (current) {
      if (
        current.type === 'FunctionDeclaration' ||
        current.type === 'FunctionExpression' ||
        current.type === 'ArrowFunctionExpression'
      ) {
        return current;
      }
      current = current.parent;
    }
    return null;
  }

  function findTypeDeclaration(typeName, scope) {
    let currentScope = scope;
    while (currentScope) {
      for (const variable of currentScope.variables) {
        if (variable.name === typeName) {
          for (const def of variable.defs) {
            if (def.node.type === 'TSInterfaceDeclaration' || def.node.type === 'TSTypeAliasDeclaration') {
              return def.node;
            }
          }
        }
      }
      currentScope = currentScope.upper;
    }
    return null;
  }

  function findPropertyInBody(members, propertyName) {
    for (const member of members) {
      if (
        member.type === 'TSPropertySignature' &&
        member.key &&
        member.key.type === 'Identifier' &&
        member.key.name === propertyName
      ) {
        return member.typeAnnotation ? member.typeAnnotation.typeAnnotation : null;
      }
    }
    return null;
  }

  function findPropertyType(typeNode, propertyName, scope) {
    if (!typeNode) return null;

    if (typeNode.type === 'TSTypeReference') {
      if (typeNode.typeName && typeNode.typeName.type === 'Identifier') {
        if (typeNode.typeParameters) return null;
        const decl = findTypeDeclaration(typeNode.typeName.name, scope);
        if (!decl) return null;
        if (decl.type === 'TSInterfaceDeclaration') {
          return findPropertyInBody(decl.body.body, propertyName);
        }
        if (decl.type === 'TSTypeAliasDeclaration') {
          return findPropertyType(decl.typeAnnotation, propertyName, scope);
        }
      }
      return null;
    }

    if (typeNode.type === 'TSTypeLiteral') {
      return findPropertyInBody(typeNode.members, propertyName);
    }

    if (typeNode.type === 'TSIntersectionType') {
      for (const member of typeNode.types) {
        const result = findPropertyType(member, propertyName, scope);
        if (result) return result;
      }
      return null;
    }

    return null;
  }

  function isParameterlessFunctionType(typeNode) {
    if (!typeNode) return false;
    return typeNode.type === 'TSFunctionType' && typeNode.params.length === 0;
  }

  function traceIdentifierType(identifierName, node) {
    const enclosingFn = findEnclosingFunction(node);
    const scope = sourceCode.getScope ? sourceCode.getScope(node) : context.getScope();

    // Case A: Destructured prop from function parameter
    if (enclosingFn && enclosingFn.params.length > 0) {
      const firstParam = enclosingFn.params[0];
      if (firstParam.type === 'ObjectPattern') {
        for (const prop of firstParam.properties) {
          if (prop.type === 'Property') {
            const valueName = prop.value.type === 'Identifier' ? prop.value.name : null;
            if (valueName === identifierName) {
              const originalKeyName = prop.key.type === 'Identifier' ? prop.key.name : null;
              if (originalKeyName && firstParam.typeAnnotation) {
                const paramType = firstParam.typeAnnotation.typeAnnotation;
                return findPropertyType(paramType, originalKeyName, scope);
              }
            }
          }
        }
      }
    }

    // Case C: Local variable with type annotation
    let currentScope = scope;
    while (currentScope) {
      for (const variable of currentScope.variables) {
        if (variable.name === identifierName) {
          for (const def of variable.defs) {
            if (def.type === 'Variable' && def.node.type === 'VariableDeclarator' && def.node.id.typeAnnotation) {
              return def.node.id.typeAnnotation.typeAnnotation;
            }
          }
        }
      }
      currentScope = currentScope.upper;
    }

    return null;
  }

  function traceMemberExpressionType(memberExpr, node) {
    const objectName = memberExpr.object.type === 'Identifier' ? memberExpr.object.name : null;
    const propertyName = memberExpr.property.type === 'Identifier' ? memberExpr.property.name : null;
    if (!objectName || !propertyName) return null;

    const enclosingFn = findEnclosingFunction(node);
    const scope = sourceCode.getScope ? sourceCode.getScope(node) : context.getScope();

    // Case B: Props object with type annotation
    if (enclosingFn && enclosingFn.params.length > 0) {
      const firstParam = enclosingFn.params[0];
      if (firstParam.type === 'Identifier' && firstParam.name === objectName && firstParam.typeAnnotation) {
        const paramType = firstParam.typeAnnotation.typeAnnotation;
        return findPropertyType(paramType, propertyName, scope);
      }
    }

    return null;
  }

  return {
    JSXAttribute(node) {
      // Step 1: Match on[A-Z] handler names
      const attrName = node.name && node.name.type === 'JSXIdentifier' ? node.name.name : null;
      if (!attrName || !/^on[A-Z]/.test(attrName)) return;

      // Step 2: Check for direct identifier passthrough
      if (!node.value || node.value.type !== 'JSXExpressionContainer') return;
      const expr = node.value.expression;
      const isIdentifier = expr.type === 'Identifier';
      const isMemberExpr = expr.type === 'MemberExpression' && !expr.computed;
      if (!isIdentifier && !isMemberExpr) return;

      // Step 3: Skip DOM elements
      const jsxOpeningElement = node.parent;
      if (isDOMElement(jsxOpeningElement)) return;

      // Step 4 & 5: Trace to type annotation and resolve
      let resolvedType;
      if (isIdentifier) {
        resolvedType = traceIdentifierType(expr.name, node);
      } else {
        resolvedType = traceMemberExpressionType(expr, node);
      }

      // Step 6: Check if parameterless function type
      if (!isParameterlessFunctionType(resolvedType)) return;

      const componentName = getJSXElementName(jsxOpeningElement);
      const identifierText = sourceCode.getText(expr);

      context.report({
        node,
        messageId: 'unsafePassthrough',
        data: {
          propName: attrName,
          componentName: componentName || 'Unknown',
        },
        suggest: [
          {
            messageId: 'wrapInArrow',
            data: { identifierText },
            fix(fixer) {
              return fixer.replaceText(node.value, `{() => ${identifierText}()}`);
            },
          },
        ],
      });
    },
  };
};
