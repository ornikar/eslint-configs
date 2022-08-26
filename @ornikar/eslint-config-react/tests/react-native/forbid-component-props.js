function View() {
  return null;
}

export function App() {
  return (
    <>
      {/* Incorrect code */}
      {/* eslint-disable-next-line react/forbid-component-props */}
      <View data-testid="sectionName.forbid-component-props.uniqueIdentifier" />

      {/* Correct code */}
      <div data-testid="sectionName.forbid-component-props.uniqueIdentifier" />
      <View testID="sectionName.forbid-component-props.uniqueIdentifier" />
    </>
  );
}
