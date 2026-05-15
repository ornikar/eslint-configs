import { createCheckPackageWithWorkspaces } from 'check-package-dependencies';

await createCheckPackageWithWorkspaces({
  isLibrary: () => true,
})
  .checkRecommended({
    onlyWarnsForInMonorepoPackagesDependencies: {
      '@ornikar/eslint-config-react': {
        'eslint-config-airbnb': {
          invalidPeerDependencyVersion: ['eslint-plugin-react-hooks'],
        },
      },
    },
  })
  .run();
