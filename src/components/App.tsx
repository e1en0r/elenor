import { Helmet } from 'react-helmet';
import { AccessibilityProvider, Modals, ThemeProvider } from '@phork/phorkit';
import { AppContent } from 'components/AppContent';

export const App = (): React.ReactElement => {
  const themeId = 'light';

  return (
    <ThemeProvider themeId={themeId}>
      <AccessibilityProvider>
        <Modals>
          <Helmet>
            <script async src="/static/scripts/matomo.js" type="text/javascript" />
          </Helmet>

          <AppContent />
        </Modals>
      </AccessibilityProvider>
    </ThemeProvider>
  );
};

App.displayName = 'App';
