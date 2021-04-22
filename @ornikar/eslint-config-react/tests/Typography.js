import PropTypes from 'prop-types';
import React from 'react';

// covers this issue: https://github.com/yannickcr/eslint-plugin-react/issues/1334

export function Typography({ tag: Tag, children }) {
  return <Tag>{children}</Tag>;
}

Typography.propTypes = {
  tag: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Typography.div = function TypographyDiv({ children }) {
  return <Typography tag="div">{children}</Typography>;
};

Typography.div.propTypes = {
  children: PropTypes.node,
};

const InvalidFunctionComponent = () => null;

export function ComponentUsingTypographyDiv() {
  return (
    <Typography.div>
      <InvalidFunctionComponent />
    </Typography.div>
  );
}
