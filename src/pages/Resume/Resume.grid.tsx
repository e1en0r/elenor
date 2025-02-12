import { Fragment, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Divider, MainPanel, PanelContainer, PermanentStackPanel, SizeConsumer, SizeProvider } from '@phork/phorkit';
import { viewports } from 'config/viewports';
import { PagePaper } from 'components/PagePaper';
import { ResumeHeader } from 'components/ResumeHeader';
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
              <SizeConsumer>{({ width }) => <ResumeHeader width={width} />}</SizeConsumer>
              <Divider />
            </PermanentStackPanel>
            <MainPanel ref={ref}>
              <SizeConsumer>
                {({ width }) => (
                  <PagePaper scrollable role="main">
                    <ResumeContent alignRight={!!width && width >= viewports.large.min} width={width} />
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
