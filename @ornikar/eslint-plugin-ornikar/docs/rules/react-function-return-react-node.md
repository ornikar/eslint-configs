# Return type of react function component should be ReactNode

💼 This rule is enabled in the ✅ `recommended` [config](https://github.com/sindresorhus/eslint-plugin-unicorn#preset-configs).

<!-- 🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix). -->

## Fail

```tsx
function Component(): ReactElement {
  return <div />;
}

function Component(): ReactElement | null {
  return <div />;
}
```

## Pass

```tsx
function Component(): ReactNode {
  return <div />;
}
```

## Options

None
