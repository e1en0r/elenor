import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import { Rhythm, useThemeId } from '@phork/phorkit';
import { APP_NAME } from 'config/strings';
import { MissingContentAlert } from 'components/MissingContentAlert';
import { PagePaper } from 'components/PagePaper';

const AnimatedPaper = styled(PagePaper)`
  ${({ themeId = 'light' }) => `
  animation: jellyphork-gonna-jelly 20s linear infinite;
  background-image: url('/static/images/jellyphork-${themeId}.svg');
  background-repeat: repeat;

  @keyframes jellyphork-gonna-jelly {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 -50%;
    }
  }
`}
`;

export const FourOhFour = (): React.ReactElement => {
  const themeId = useThemeId();

  return (
    <AnimatedPaper centered flexible themeId={themeId}>
      <Helmet>
        <title>{`${APP_NAME} - 404`}</title>
      </Helmet>

      <Rhythm my={6}>
        <MissingContentAlert raised color="primary" message="Page not found" />
      </Rhythm>
    </AnimatedPaper>
  );
};
