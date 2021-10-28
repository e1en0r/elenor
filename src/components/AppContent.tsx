import styled from '@emotion/styled';
import { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { ErrorBoundary, Paper, SizeProvider } from '@phork/phorkit';
import { LineLoader } from 'components/LineLoader';
import FourOhFour from 'pages/FourOhFour';
import Home from 'pages/Home';

const ViewportPaper = styled(Paper)`
  width: 100vw;
  height: 100% !important;
  min-height: 100% !important;
  max-height: 100% !important;
`;

export const AppContent = (): React.ReactElement => {
  return (
    <SizeProvider observe decimalPlaces={0}>
      {ref => (
        <ViewportPaper scrollable color="primary" ref={ref}>
          <ErrorBoundary variant="page">
            <Suspense fallback={<LineLoader fixed position="top" />}>
              <Switch>
                <Route exact component={Home} path="/" />
                <Route>
                  <FourOhFour />
                </Route>
              </Switch>
            </Suspense>
          </ErrorBoundary>
        </ViewportPaper>
      )}
    </SizeProvider>
  );
};
