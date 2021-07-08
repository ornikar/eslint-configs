import type { FC, ReactElement, ReactNode } from 'react';
import { View } from './view';
import styles from './styles.module.css';

interface AppIntlProviderProps {
  onClick?: string;
  locale: string;
  children: ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types
  unusedProp?: string;
}

function AppIntlProvider({ locale, children, onClick }: AppIntlProviderProps): ReactElement {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <>{children}</>;
}

export const renderWithIntl = (ui: ReactElement, locale = 'fr-FR'): FC => {
  // eslint-disable-next-line react/function-component-definition
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
