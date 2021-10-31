import { BrowserRouter as Router } from 'react-router-dom';
import { AccessibilityProvider, Modals, ThemeProvider } from '@phork/phorkit';
import { AppContent } from 'components/AppContent';

const App = (): React.ReactElement => {
  const themeId = 'light';

  return (
    <ThemeProvider themeId={themeId}>
      <AccessibilityProvider>
        <Modals>
          <Router>
            <AppContent />
          </Router>
        </Modals>
      </AccessibilityProvider>
    </ThemeProvider>
  );
};

// a default export is necessary for the lazy loading
export default App;
App.displayName = 'App';
