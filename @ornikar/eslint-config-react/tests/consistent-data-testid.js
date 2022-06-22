function View() {
  return null;
}

export function App() {
  return (
    <>
      {/* Incorrect code */}
      {/* eslint-disable-next-line testing-library/consistent-data-testid */}
      <View testID="empty" />
      {/* eslint-disable-next-line testing-library/consistent-data-testid */}
      <View testID="camelCase" />
      {/* eslint-disable-next-line testing-library/consistent-data-testid */}
      <View testID="PascalCase" />
      {/* eslint-disable-next-line testing-library/consistent-data-testid */}
      <View testID="sectionName.uniqueIdentifier" />
      {/* eslint-disable-next-line testing-library/consistent-data-testid */}
      <View testID="sectionName.pageName.WrongFileName.uniqueIdentifier" />

      {/* Correct code */}
      <View testID="sectionName.consistent-data-testid.uniqueIdentifier" />
      <View testID="sectionName.pageName.consistent-data-testid.uniqueIdentifier" />
    </>
  );
}
