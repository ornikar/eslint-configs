'use strict';

// ❌ Incorrect uses with this rule

// TODO [2000-01-01]: Do not use dates

// TODO [2000-01-01, 2001-01-01]: Multiple dates won't work.

// TODO [>1]: If your package.json version is > 1.
// TODO [>=1]: If your package.json version is >= 1.

// TODO [>1, >2]: Multiple package versions won't work.

// TODO [+eslint]: Since we already have it, this reports.

// TODO [-we-dont-have-this-package]: Since we don't have, trigger a report.

// TODO [eslint@>1]: When `read-pkg` version is > 1 don't forget to do this.

// TODO [eslint@>=5.1.1]: When `read-pkg` version is >= 5.1.1 don't forget to do that.

// TODO [engine:node@>=8]: Whoops, we are already supporting it!

// TODO: Add unicorns.

// TODO [DR-123]: wrong JIRA ticket format

// TODO [ornikar.atlassian.net/browse/DR-123]: invalid JIRA ticket format

// TODO [invalidstart https://ornikar.atlassian.net/browse/DR-123]: invalid start with ticket url

// TODO [https://ornikar.atlassian.net/browse/DR-123 invalidend]: invalid end with ticket url

// ✅ Correct uses with this rule

// TODO (michel) [https://ornikar.atlassian.net/browse/DR-123]: You can add something before the arguments.
// TODO @michel [https://ornikar.atlassian.net/browse/DR-123]: You can add something before the arguments.
// TODO [https://ornikar.atlassian.net/browse/DR-123] (michel): You can add something after the arguments.
// TODO [https://ornikar.atlassian.net/browse/DR-123] No colon after argument.

// TODO [+react]: Refactor this when we use React.
// TODO [-eslint]: If we remove eslint we need to change this.

// TODO [lodash@>10]: Lodash has a new way to do this; when we bump to its version let's use it.
// TODO [lodash@>=10]: Lodash has a new way to do this; when we bump to its version let's use it.

// TODO [DR-123, +popura, lodash@>10]: Combo.

// TODO [engine:node@>42]: When we bump to this Node version we can use import/export.

// TODO [https://ornikar.atlassian.net/browse/DR-123]: right JIRA ticket format

/*
 * We should really make this code better.
 * TODO [http://ornikar.atlassian.net/browse/DR-123]: This works
 */
