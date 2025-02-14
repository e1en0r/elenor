import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AccessibilityProvider, Modals, Theme, ThemeProvider } from '@phork/phorkit';
import { AppContent } from 'components/AppContent';

export type AppProps = {
  themeId: Theme;
};

export const App = ({ themeId }: AppProps): React.ReactElement => (
  <ThemeProvider themeId={themeId}>
    <AccessibilityProvider>
      <HelmetProvider>
        <Modals>
          <Helmet>
            <script async src="/static/scripts/matomo.js" type="text/javascript" />
          </Helmet>

          <AppContent />
        </Modals>
      </HelmetProvider>
    </AccessibilityProvider>
  </ThemeProvider>
);

App.displayName = 'App';
