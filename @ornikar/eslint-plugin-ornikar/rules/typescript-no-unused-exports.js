'use strict';

const path = require('node:path');
// eslint-disable-next-line import/no-unresolved -- missing main in package.json
const { ESLintUtils } = require('@typescript-eslint/utils');
const { default: analyzeTsConfig } = require('ts-unused-exports');

exports.meta = {
  type: 'problem',

  docs: {
    description: 'Identifies unused exports using "ts-unused-exports". Made for usage with vscode only.',
    category: 'Best Practices',
    recommended: false, // experimental
  },

  messages: {
    unusedExport: "Export '{{exportName}}' is unused.",
    removeExport: "Remove export '{{exportName}}'.",
  },

  hasSuggestions: true,

  schema: [
    {
      additionalProperties: false,
      properties: {
        allowUnusedEnums: {
          type: 'boolean',
        },
        allowUnusedTypes: {
          type: 'boolean',
        },
        ignoreFiles: {
          type: 'string',
        },
      },
      type: 'object',
    },
  ],
};

function getSuggestionFixer(node) {
  return (fixer) => {
    return fixer.remove(node);
  };
}

exports.create = (context) => {
  const options = context.options || {};

  const services = ESLintUtils.getParserServices(context);
  // configFilePath is all lowercase on mac
  const tsconfigPathLowercased = services.program.getCompilerOptions().configFilePath;
  // should cover ornikar case.
  const tsconfigPath = path.join(process.cwd(), path.relative(process.cwd().toLowerCase(), tsconfigPathLowercased));

  const tsUnusedOptions = [
    '--ignoreFiles=/(__mocks__|__generated__)/',
    '--ignoreFiles=[.](web|ios|android)$',
    '--ignoreFiles=apollo/typeDefs$',
  ];

  if (options.allowUnusedEnums) {
    tsUnusedOptions.push('--allowUnusedEnums');
  }

  if (options.allowUnusedTypes) {
    tsUnusedOptions.push('--allowUnusedTypes');
  }

  if (options.ignoreFiles) {
    tsUnusedOptions.push(`--ignoreFiles=${options.ignoreFiles}`);
  }

  const result = analyzeTsConfig(tsconfigPath, tsUnusedOptions);

  return {
    Program() {
      const filename = context.getFilename();

      if (!result[filename]) {
        return;
      }

      const sourceCode = context.getSourceCode();

      for (const unusedExport of result[filename]) {
        const index = sourceCode.getIndexFromLoc({
          column: unusedExport.location.character,
          line: unusedExport.location.line,
        });

        const exportToken = sourceCode.getTokenByRangeStart(index);

        if (exportToken) {
          context.report({
            node: exportToken,
            messageId: 'unusedExport',
            data: { exportName: unusedExport.exportName },
            suggest: [
              {
                messageId: 'removeExport',
                data: { exportName: unusedExport.exportName },
                fix: getSuggestionFixer(exportToken),
              },
            ],
          });
        }
      }
    },
  };
};
