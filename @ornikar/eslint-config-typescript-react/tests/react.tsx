import type { FC, ReactElement, ReactNode } from 'react';

interface AppIntlProviderProps {
  onClick?: string;
  locale: string;
  children: ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types
  unusedProp?: string;
}

interface IntlProviderProps {
  children: ReactNode;
}

function AppIntlProvider({ locale, children, onClick }: AppIntlProviderProps): ReactNode {
  return <>Content - {children}</>;
}

export const renderWithIntl = (ui: ReactElement, locale = 'fr-FR'): FC<IntlProviderProps> => {
  // eslint-disable-next-line react/function-component-definition
  const IntlProvider: FC<IntlProviderProps> = ({ children }): ReactElement => {
    return <AppIntlProvider locale={locale}>{children}</AppIntlProvider>;
  };
  return IntlProvider;
};
