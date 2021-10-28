import { Helmet } from 'react-helmet';
import { Rhythm } from '@phork/phorkit';
import { APP_NAME } from 'constants/strings';
import { MissingContentAlert } from 'components/MissingContentAlert';
import { PagePaper } from 'components/PagePaper';

export const FourOhFour = (): React.ReactElement => {
  return (
    <PagePaper>
      <Helmet>
        <title>{`${APP_NAME} - 404`}</title>
      </Helmet>

      <Rhythm my={6}>
        <MissingContentAlert color="primary" message="Page not found" />
      </Rhythm>
    </PagePaper>
  );
};
