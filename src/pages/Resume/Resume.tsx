import { Fragment, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Divider, MainPanel, PanelContainer, PermanentStackPanel, SizeConsumer, SizeProvider } from '@phork/phorkit';
import { viewports } from 'config/viewports';
import { Header } from 'components/Header';
import { PagePaper } from 'components/PagePaper';
import { ResumeContent } from './ResumeContent';

export const Resume = memo(function ResumePage() {
  return (
    <Fragment>
      <Helmet>
        <title>Elenor Collings</title>
      </Helmet>

      <SizeProvider observe>
        {ref => (
          <PanelContainer viewport orientation="horizontal">
            <PermanentStackPanel position="top">
              <SizeConsumer>{({ width }) => <Header width={width} />}</SizeConsumer>
              <Divider />
            </PermanentStackPanel>
            <MainPanel ref={ref}>
              <SizeConsumer>
                {({ width }) => (
                  <PagePaper scrollable role="main">
                    <ResumeContent alignRight={!!width && width >= viewports.medium.min} width={width} />
                  </PagePaper>
                )}
              </SizeConsumer>
            </MainPanel>
          </PanelContainer>
        )}
      </SizeProvider>
    </Fragment>
  );
});
