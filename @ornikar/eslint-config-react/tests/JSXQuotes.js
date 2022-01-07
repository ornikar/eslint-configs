function App() {
  return null;
}

function Color() {
  return null;
}

export function JSXQuotes() {
  return (
    <App prop={'Hello world'}>
      {'Hello world'}
      <Color text={'\u00A0'} />
      {'Hello \u00B7 world'};<style type="text/css">{'.main { margin-top: 0; }'}</style>;
    </App>
  );
}
