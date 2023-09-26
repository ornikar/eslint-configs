# Forbid importing libraries replacing fetch which is now available in native, browser and node.

💼 This rule is enabled in the ✅ `recommended` [config](https://github.com/sindresorhus/eslint-plugin-unicorn#preset-configs).

## Fail

```ts
import fetch from 'node-fetch';

fetch('/api').then(console.log);
```

## Pass

```ts
fetch('/api').then(console.log);
```

## Options

None
