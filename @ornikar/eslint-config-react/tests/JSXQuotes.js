function App() {
  return null;
}

function Color() {
  return null;
}

export function JSXQuotes() {
  return (
    // eslint-disable-next-line react/jsx-curly-brace-presence
    <App prop={'Hello world'}>
      {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
      {'Hello world'}
      <Color text={'\u00A0'} />
      {'Hello \u00B7 world'};<style type="text/css">{'.main { margin-top: 0; }'}</style>;
    </App>
  );
}
