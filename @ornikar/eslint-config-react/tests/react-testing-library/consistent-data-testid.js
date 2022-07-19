function View() {
  return null;
}

// Rule is disabled for tests, see below for the real tests
// @ornikar/eslint-config-react/tests/consistent-data-testid.js
export function App() {
  return <View data-testid="unruledTestId" />;
}
