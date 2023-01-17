function View() {
  return null;
}

export function App() {
  return (
    <>
      {/* Incorrect code */}
      {/* eslint-disable-next-line testing-library/consistent-data-testid */}
      <View data-testid="empty" />
      {/* eslint-disable-next-line testing-library/consistent-data-testid */}
      <View data-testid="library-name.empty" />
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
      {/* eslint-disable-next-line testing-library/consistent-data-testid */}
      <View data-testid="sectionName.subSectionName.tooMuch.consistent-data-testid.uniqueIdentifier" />
      {/* eslint-disable-next-line testing-library/consistent-data-testid */}
      <View data-testid="sectionName.consistent-data-testid.uniqueIdentifier" />
      {/* eslint-disable-next-line testing-library/consistent-data-testid */}
      <View testID="sectionName.consistent-data-testid.uniqueIdentifier" />
      {/* eslint-disable-next-line testing-library/consistent-data-testid */}
      <View testID="sectionName.subSectionName.consistent-data-testid.uniqueIdentifier" />

      {/* Correct code */}
      <View data-testid="library-name.sectionName.consistent-data-testid.uniqueIdentifier" />
      <View testID="library-name.sectionName.consistent-data-testid.uniqueIdentifier" />
      <View testID="library-name.sectionName.subSectionName.consistent-data-testid.uniqueIdentifier" />
    </>
  );
}
