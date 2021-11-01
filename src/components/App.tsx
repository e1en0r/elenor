import { AccessibilityProvider, Modals, ThemeProvider } from '@phork/phorkit';
import { AppContent } from 'components/AppContent';

export const App = (): React.ReactElement => {
  const themeId = 'light';

  return (
    <ThemeProvider themeId={themeId}>
      <AccessibilityProvider>
        <Modals>
          <AppContent />
        </Modals>
      </AccessibilityProvider>
    </ThemeProvider>
  );
};

App.displayName = 'App';
