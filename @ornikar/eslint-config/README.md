# @ornikar/eslint-config

Ornikar eslint config

Based on Airbnb.

This is the config to use when you don't have babel on the project.

Also see:

- [@ornikar/eslint-config-babel](https://github.com/ornikar/eslint-configs/tree/master/%40ornikar/eslint-config-babel)
- [@ornikar/eslint-config-node](https://github.com/ornikar/eslint-configs/tree/master/%40ornikar/eslint-config-node)
- [@ornikar/eslint-config-react](https://github.com/ornikar/eslint-configs/tree/master/%40ornikar/eslint-config-react)
- [@ornikar/eslint-config-typescript](https://github.com/ornikar/eslint-configs/tree/master/%40ornikar/eslint-config-typescript)
- [@ornikar/eslint-config-typescript-react](https://github.com/ornikar/eslint-configs/tree/master/%40ornikar/eslint-config-typescript-react)

1. `npm install --save-dev eslint @ornikar/eslint-config`
2. Add `"extends": ["@ornikar/eslint-config"]` to your eslint config

## How to configure a project

### Two configurations files

In a project you should have two configurations files:

- /.eslintrc.json
- /{src,lib}/.eslintrc.json

If the project is compiled, use `src` for source and `dist` for compilation with rollup.
If the project is not compiled, use `lib`.
If the project is CRA, next or build with webpack, use `src` for source and `build` or the build directory your tool uses.

Using two config files is important:

- the root eslintrc is for config files and scripts. It should allow dev dependencies
- the source eslintrc is for your source and tests files.

### Use `"root": true`

Both the configuration shoud set `"root": true` to prevent eslint to merge the config file with other higher eslintrc configs. See [Cascading and hierarchy](https://eslint.org/docs/user-guide/configuring/configuration-files#cascading-and-hierarchy) in eslint config documentation.

The advantage of using 2 config files is to avoid overriding rules set for root. For example, root config should use plugin node, but not always your source config !

### Use `ignorePatterns` in .eslintrc.json

Use `ignorePatterns` instead of .eslintignore file. We have enough configuration files !

### Use `--report-unused-disable-directives`

Really usefull tip, it prevents leaving unused eslint-disable directives.

### Lerna/Workspaces Configuration

Assuming your package.json looks like `"workspaces": ["packages/*"]`:

- /.eslintrc.json
- /packages/\*/{src,lib}/.eslintrc.json
