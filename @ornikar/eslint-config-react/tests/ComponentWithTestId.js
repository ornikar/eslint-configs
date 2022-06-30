import PropTypes from 'prop-types';

export function ComponentWithTestId({ 'data-testid': dataTestId }) {
  return <div data-testid={dataTestId} />;
}

ComponentWithTestId.propTypes = {
  'data-testid': PropTypes.string,
};

export function ComponentUsingComponentWithTestId() {
  return (
    <>
      {/* eslint-disable-next-line react/forbid-component-props */}
      <ComponentUsingComponentWithTestId data-test="tests.ComponentWithTestId.unique" />
      {/* eslint-disable-next-line react/forbid-component-props */}
      <ComponentUsingComponentWithTestId data-test-id="tests.ComponentWithTestId.unique" />
      {/* eslint-disable-next-line react/forbid-component-props */}
      <ComponentUsingComponentWithTestId data-test-class="tests.ComponentWithTestId.unique" />

      <ComponentUsingComponentWithTestId data-testid="tests.ComponentWithTestId.unique" />
      <ComponentUsingComponentWithTestId testID="tests.ComponentWithTestId.unique" />
    </>
  );
}
