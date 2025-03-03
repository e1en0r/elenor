import { Fragment, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Divider, MainPanel, PanelContainer, PermanentStackPanel, SizeConsumer, SizeProvider } from '@phork/phorkit';
import { viewports } from 'config/viewports';
import { PagePaper } from 'components/PagePaper';
import { ResumeContent } from 'components/ResumeContent';
import { ResumeHeader } from 'components/ResumeHeader';

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
                {({ width }) =>
                  width ? (
                    <PagePaper scrollable role="main">
                      <ResumeContent alignRight={!!width && width >= viewports.medium.min} width={width} />
                    </PagePaper>
                  ) : null
                }
              </SizeConsumer>
            </MainPanel>
          </PanelContainer>
        )}
      </SizeProvider>
    </Fragment>
  );
});
