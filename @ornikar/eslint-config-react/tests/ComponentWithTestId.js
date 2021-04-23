import PropTypes from 'prop-types';
import React from 'react';

export function ComponentWithTestId({ 'data-testid': dataTestId }) {
  return <div data-testid={dataTestId} />;
}

ComponentWithTestId.propTypes = {
  'data-testid': PropTypes.string,
};

export function ComponentUsingComponentWithTestId() {
  return <ComponentUsingComponentWithTestId data-testid="testid" />;
}
