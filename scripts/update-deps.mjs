#!/usr/bin/env node

import fs from 'node:fs';
import { getSyncPackageLocations } from '@ornikar/monorepo-config';

const packageLocations = ['.', ...getSyncPackageLocations()];

const depsToUpdate = `
paste here the list of changes in the release or prerelease job from lerna:
- @ornikar/babel-preset-base: 4.0.0 => 4.0.1-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/babel-preset-kitt-universal: 5.1.1 => 5.1.2-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/babel-preset-react: 4.0.1 => 4.0.2-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/browserslist-config: 6.0.0 => 6.0.1-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/commitlint-config: 6.0.1 => 6.0.2-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/intl-config: 7.0.2 => 7.0.3-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/jest-config-react-native-web: 10.0.0 => 10.0.1-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/jest-config-react-native: 10.0.0 => 10.0.1-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/jest-config-react: 12.1.1 => 12.1.2-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/jest-config: 10.1.1 => 10.1.2-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/monorepo-config: 12.1.0 => 12.1.1-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/postcss-config: 7.0.2 => 7.0.3-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/prettier-config: 7.0.0 => 7.0.1-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/renovate-config: 6.0.0 => 6.0.1-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/repo-config-react-legacy-css: 13.0.4 => 13.0.5-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/repo-config-react: 11.0.7 => 11.0.8-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/repo-config: 13.2.1 => 13.2.2-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/rollup-config: 8.0.1 => 8.0.2-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/storybook-config: 8.1.0 => 8.1.1-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/stylelint-config: 12.0.0 => 12.0.1-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
- @ornikar/webpack-config: 9.1.0 => 9.1.1-canary.c3a4bbaff039ee004c9871c01aeb483ed485a32f.0
`;

const depsToUpdateMap = depsToUpdate
  .split('\n')
  .map((line) => {
    let parsed = line.match(/^\s*- (.+): (.+) => (.+)/);
    if (parsed) {
      const [, name, , to] = parsed;
      return [name, to];
    }
    parsed = line.match(/^\s*- (.+)@([^@]+)$/);
    if (parsed) {
      const [, name, to] = parsed;
      return [name, to];
    }

    return null;
  })
  .filter(Boolean);

packageLocations.forEach((location) => {
  const pkg = JSON.parse(fs.readFileSync(`${location}/package.json`));

  ['dependencies', 'devDependencies'].forEach((depType) => {
    if (!pkg[depType]) return;
    depsToUpdateMap.forEach(([name, to]) => {
      if (pkg[depType][name]) {
        pkg[depType][name] = to;
      }
    });
  });

  fs.writeFileSync(`${location}/package.json`, `${JSON.stringify(pkg, null, 2)}\n`);
});
