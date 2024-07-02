function View() {
  return null;
}

function Text() {
  return null;
}

export function MyComponent() {
  const text = 'some text';

  return (
    <>
      {/* Incorrect code */}
      {/* eslint-disable-next-line react-native/no-raw-text */}
      <View>{`${text}`}</View>

      {/* Correct code */}
      <View>
        <Text>{`${text}`}</Text>
      </View>
    </>
  );
}
