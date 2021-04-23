import type { FC, ReactElement, ReactNode } from 'react';

interface AppIntlProviderProps {
  locale: string;
  children: ReactNode;
}

function AppIntlProvider({ locale, children }: AppIntlProviderProps): ReactElement {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <>{children}</>;
}

export const renderWithIntl = (ui: ReactElement, locale = 'fr-FR'): FC => {
  const IntlProvider: FC = ({ children }): ReactElement => {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <AppIntlProvider locale={locale}>{children}</AppIntlProvider>;
  };
  return IntlProvider;
};
