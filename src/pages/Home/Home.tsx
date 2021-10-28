import { Fragment, memo } from 'react';
import { Helmet } from 'react-helmet';
import { APP_NAME } from 'constants/strings';
import { PagePaper } from 'components/PagePaper';

export const Home = memo(function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>{APP_NAME}</title>
      </Helmet>

      <Fragment>
        <PagePaper flexible role="main">
          Hello world
        </PagePaper>
      </Fragment>
    </Fragment>
  );
});
