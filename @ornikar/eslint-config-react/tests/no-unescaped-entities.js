function App() {
  return null;
}

export function NoUnescapedEntities() {
  return (
    <App>
      {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
      <p>{"A paragraph with 'quote' is incorrect"}</p>
      {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
      <p>{'A paragraph with "double quote" is incorrect'}</p>

      <p>A paragraph with 'quote' is correct</p>
      <p>A paragraph with "double quote" is correct</p>
      <div> {'>'} </div>
      <div> {'<'} </div>
      <div> {'}'} </div>
      <div> {'{'} </div>
    </App>
  );
}
