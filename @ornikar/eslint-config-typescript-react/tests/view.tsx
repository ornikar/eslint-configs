// eslint-disable-next-line import/no-extraneous-dependencies
import React, { ReactElement } from 'react';

interface ViewProps {
  className: string;
}

export function View({ className }: ViewProps): ReactElement {
  return <div className={className} />;
}
