import styled from '@emotion/styled';
import { Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { ErrorBoundary, Paper, PaperProps, SizeProvider } from '@phork/phorkit';
import { LineLoader } from 'components/LineLoader';
import FourOhFour from 'pages/FourOhFour';
import Links from 'pages/Links';
import Resume from 'pages/Resume';

const ViewportPaper = styled(Paper)`
  width: 100vw;
  height: 100% !important;
  min-height: 100% !important;
  max-height: 100% !important;
`;

export type AppContentProps = Omit<PaperProps, 'children' | 'color' | 'scrollable'>;

export const AppContent = (props: AppContentProps): React.ReactElement => {
  return (
    <SizeProvider observe decimalPlaces={0}>
      {ref => (
        <ViewportPaper scrollable color="primary" ref={ref} {...props}>
          <ErrorBoundary variant="page">
            <Routes>
              <Route
                element={
                  <Suspense fallback={<LineLoader position="top" />}>
                    <Outlet />
                  </Suspense>
                }
                path="/"
              >
                <Route index element={<Resume />} />
                <Route element={<Resume />} path="resume" />
                <Route element={<Links />} path="links" />
                <Route element={<FourOhFour />} path="*" />
              </Route>
            </Routes>
          </ErrorBoundary>
        </ViewportPaper>
      )}
    </SizeProvider>
  );
};
