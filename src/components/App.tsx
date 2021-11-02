import { Helmet } from 'react-helmet';
import { AccessibilityProvider, Modals, Theme, ThemeProvider } from '@phork/phorkit';
import { AppContent } from 'components/AppContent';

export type AppProps = {
  themeId: Theme;
};

export const App = ({ themeId }: AppProps): React.ReactElement => (
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

App.displayName = 'App';
