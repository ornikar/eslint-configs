function App() {
  return null;
}

export function NoUnescapedEntities() {
  return (
    <App>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p>A paragraph with 'quote' is incorrect</p>
      <p>A paragraph with "quote" is correct</p>
      <div> {'<'} </div>
      <div> &gt; </div>
    </App>
  );
}
