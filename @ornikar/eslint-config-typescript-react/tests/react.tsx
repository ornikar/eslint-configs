import type { FC, ReactElement, ReactNode } from 'react';
import { View } from './view';
import styles from './styles.module.css';

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Component(): ReactElement {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <View className={styles.test} />;
}
