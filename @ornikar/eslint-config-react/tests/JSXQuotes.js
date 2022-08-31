function App() {
  return null;
}

function Color() {
  return null;
}

export function JSXQuotes() {
  return (
    <App
      validProp="Hello world"
      // eslint-disable-next-line react/jsx-curly-brace-presence
      invalidProp={'Hello world'}
    >
      Hello World
      {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
      {'Hello world'}
      <Color text={'\u00A0'} />
      {'Hello \u00B7 world'};<style type="text/css">{'.main { margin-top: 0; }'}</style>;
      <p>A paragraph without "base" prop set should be displayed as body.</p>
      <div> {'>'} </div>
    </App>
  );
}
