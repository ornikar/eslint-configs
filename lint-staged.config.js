'use strict';

const createLintStagedConfig = require('@ornikar/repo-config/createLintStagedConfig');

// During the ESLint 8 -> 9 migration we stay on legacy .eslintrc (PR 2);
// v9 defaults to flat config and errors without this opt-out. lint-staged
// spawns commands without a shell, so `VAR=val command` syntax doesn't work
// inside command strings — set the env var directly on `process.env` so it
// inherits to all spawned child processes. Removed in PR 3 (flat-config
// migration). See plan: Migration ESLint v9/10 on Notion.
process.env.ESLINT_USE_FLAT_CONFIG = 'false';

module.exports = createLintStagedConfig({ srcDirectoryName: '' });
