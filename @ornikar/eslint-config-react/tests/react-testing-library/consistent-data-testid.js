function View() {
  return null;
}

// Rules is disable for tests, see below for the real tests
export function App() {
  return <View data-testid="unruledTestId" />;
}
