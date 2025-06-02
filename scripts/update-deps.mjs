#!/usr/bin/env node

import fs from 'node:fs';
import { getSyncPackageLocations } from '@ornikar/monorepo-config';

const packageLocations = ['.', ...getSyncPackageLocations()];

const depsToUpdate = `
paste here the list of changes in the release or prerelease job from lerna:
- @ornikar/babel-preset-kitt-universal: 6.0.0 => 6.0.1-canary.0fd704b32f7330c12282a39dfcc5913ba8719bb7.0
- @ornikar/browserslist-config: 7.0.1 => 7.0.2-canary.0fd704b32f7330c12282a39dfcc5913ba8719bb7.0
- @ornikar/jest-config-react-native: 12.0.2 => 12.0.3-canary.0fd704b32f7330c12282a39dfcc5913ba8719bb7.0
- @ornikar/jest-config-react: 14.1.0 => 14.1.1-canary.0fd704b32f7330c12282a39dfcc5913ba8719bb7.0
- @ornikar/jest-config: 11.3.0 => 11.3.1-canary.0fd704b32f7330c12282a39dfcc5913ba8719bb7.0
- @ornikar/rollup-config: 9.0.0 => 9.0.1-canary.0fd704b32f7330c12282a39dfcc5913ba8719bb7.0
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
