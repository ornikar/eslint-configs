function View() {
  return null;
}

export function App() {
  return (
    <>
      {/* Incorrect code */}
      <View testID="empty" />
      <View testID="camelCase" />
      <View testID="PascalCase" />
      <View testID="sectionName.uniqueIdentifier" />
      <View testID="sectionName.pageName.WrongFileName.uniqueIdentifier" />

      {/* Correct code */}
      <View testID="sectionName.consistent-data-testid.uniqueIdentifier" />
      <View testID="sectionName.pageName.consistent-data-testid.uniqueIdentifier" />
    </>
  );
}
