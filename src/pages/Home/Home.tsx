import { Fragment, memo } from 'react';
import { Helmet } from 'react-helmet';
import { Flex, Rhythm, ColoredIconButton, ColoredIconButtonProps, useGetWidth } from '@phork/phorkit';
import { APP_NAME, EMAIL, GITHUB, INSTAGRAM, LINKED_IN, PHORKIT, TWITTER } from 'constants/strings';
import { CreditsButton } from 'components/CreditsButton';
import { PagePaper } from 'components/PagePaper';
import { EmailIcon } from 'icons/EmailIcon';
import { GithubIcon } from 'icons/GithubIcon';
import { HeartIcon } from 'icons/HeartIcon';
import { InstagramIcon } from 'icons/InstagramIcon';
import { LinkedInIcon } from 'icons/LinkedInIcon';
import { PhorkIcon } from 'icons/PhorkIcon';
import { TwitterIcon } from 'icons/TwitterIcon';

type SizeProps = {
  iconSize: ColoredIconButtonProps['size'];
  maxWidth: number;
  scale: 'xsmall' | 'small' | 'medium';
};

const getSizesByBreakpoint = (width: number | undefined): SizeProps => {
  if (width) {
    if (width < 380) {
      return {
        scale: 'xsmall',
        maxWidth: 230,
        iconSize: '2xlarge',
      };
    }

    if (width < 480) {
      return {
        scale: 'small',
        maxWidth: 330,
        iconSize: 'xlarge',
      };
    }
  }

  return {
    scale: 'medium',
    maxWidth: 410,
    iconSize: '4xlarge',
  };
};

export const Home = memo(function Home() {
  const width = useGetWidth();
  const { maxWidth, iconSize } = getSizesByBreakpoint(width);

  const buttonProps: Pick<ColoredIconButtonProps, 'shape' | 'size' | 'weight'> = {
    shape: 'circle',
    size: iconSize,
    weight: 'solid',
  };

  return (
    <Fragment>
      <Helmet>
        <title>{APP_NAME}</title>
      </Helmet>

      <Fragment>
        <PagePaper flexible role="main" style={{ justifyContent: 'center', minWidth: 280 }}>
          <Rhythm mb={14} mt={8}>
            <Flex alignItems="center" alignSelf="center" direction="column" style={{ maxWidth }}>
              <Rhythm mb={10} pb={4}>
                <ColoredIconButton<'a'>
                  as="a"
                  colorId="P10"
                  href={PHORKIT}
                  target="_blank"
                  {...buttonProps}
                  size={undefined}
                  weight="inline"
                >
                  <PhorkIcon size={maxWidth} title="Phork/it component library" />
                </ColoredIconButton>
              </Rhythm>

              <Rhythm m={-2}>
                <Flex wrap alignItems="center" direction="row">
                  <Flex alignItems="center" direction="row">
                    <Rhythm m={2}>
                      <ColoredIconButton<'a'> as="a" colorId="P10" href={GITHUB} target="_blank" {...buttonProps}>
                        <GithubIcon size={20} />
                      </ColoredIconButton>

                      <ColoredIconButton<'a'> as="a" colorId="P15" href={INSTAGRAM} target="_blank" {...buttonProps}>
                        <InstagramIcon size={20} />
                      </ColoredIconButton>

                      <ColoredIconButton<'a'> as="a" colorId="P20" href={TWITTER} target="_blank" {...buttonProps}>
                        <TwitterIcon size={20} />
                      </ColoredIconButton>
                    </Rhythm>
                  </Flex>
                  <Flex alignItems="center" direction="row">
                    <Rhythm m={2}>
                      <ColoredIconButton<'a'> as="a" colorId="P25" href={LINKED_IN} target="_blank" {...buttonProps}>
                        <LinkedInIcon size={20} />
                      </ColoredIconButton>

                      <ColoredIconButton<'a'> as="a" colorId="P30" href={EMAIL} target="_blank" {...buttonProps}>
                        <EmailIcon size={20} />
                      </ColoredIconButton>

                      <CreditsButton<typeof ColoredIconButton>>
                        <ColoredIconButton colorId="P35" {...buttonProps}>
                          <HeartIcon size={20} title="Credits" />
                        </ColoredIconButton>
                      </CreditsButton>
                    </Rhythm>
                  </Flex>
                </Flex>
              </Rhythm>
            </Flex>
          </Rhythm>
        </PagePaper>
      </Fragment>
    </Fragment>
  );
});
