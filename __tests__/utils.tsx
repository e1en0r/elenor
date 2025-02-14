/* eslint-disable import/export */
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@phork/phorkit';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter
      future={{
        // eslint-disable-next-line camelcase
        v7_startTransition: true,
        // eslint-disable-next-line camelcase
        v7_relativeSplatPath: true,
      }}
    >
      <HelmetProvider>
        <ThemeProvider themeId="light">{children}</ThemeProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
};

const customRender: (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => RenderResult = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
