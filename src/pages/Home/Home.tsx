import { Fragment, memo } from 'react';
import { Helmet } from 'react-helmet';
import { Flex, Rhythm, ColoredIconButton, ColoredIconButtonProps, useGetHeight, useGetWidth } from '@phork/phorkit';
import { APP_NAME, EMAIL, GITHUB, INSTAGRAM, LINKED_IN, PHORKIT, TWITTER } from 'config/strings';
import { CreditsButton } from 'components/CreditsButton';
import { PagePaper } from 'components/PagePaper';
import { showLandscapeLayout } from 'utils/sizeUtils';
import { EmailIcon } from 'icons/EmailIcon';
import { GithubIcon } from 'icons/GithubIcon';
import { HeartIcon } from 'icons/HeartIcon';
import { InstagramIcon } from 'icons/InstagramIcon';
import { LinkedInIcon } from 'icons/LinkedInIcon';
import { PhorkIcon } from 'icons/PhorkIcon';
import { TwitterIcon } from 'icons/TwitterIcon';

type Size = 'small' | 'medium' | 'large';

type SizeProps = {
  iconSize: ColoredIconButtonProps['size'];
  maxSize: number;
};

const sizes: Record<Size, SizeProps> = {
  small: {
    maxSize: 230,
    iconSize: '2xlarge',
  },
  medium: {
    maxSize: 330,
    iconSize: 'xlarge',
  },
  large: {
    maxSize: 410,
    iconSize: '4xlarge',
  },
};

const getSizesByHeight = (height: number | undefined): SizeProps => {
  if (height) {
    if (height < 380) return sizes.small;
    if (height < 480) return sizes.medium;
  }
  return sizes.large;
};

const getSizesByWidth = (width: number | undefined): SizeProps => {
  if (width) {
    if (width < 410) return sizes.small;
    if (width < 480) return sizes.medium;
  }
  return sizes.large;
};

export const Home = memo(function Home() {
  const height = useGetHeight();
  const width = useGetWidth();

  const isTooSmallForLandscape = width !== undefined && width < 460;
  const isTooBigForLandscape = height !== undefined && height > 730;

  const isLandscape = !isTooSmallForLandscape && !isTooBigForLandscape && showLandscapeLayout(width, height);
  const { maxSize, iconSize } = isLandscape ? getSizesByHeight(height) : getSizesByWidth(width);

  /**
   * In landscape mode on smaller mobile devices the
   * icons need to wrap to 2 columns, however flexbox
   * has a bug where if a column wraps it doesn't grow
   * in size and instead it just overflows. This flag
   * will force the flex direction to use row in these
   * cases which appears the same as a wrapped column
   * should.
   *
   * See https://stackoverflow.com/q/33891709/11386649
   */
  const hackLandscapeWrap = isLandscape && height !== undefined && height < 380;

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
        <PagePaper flexible role="main" style={{ justifyContent: 'center' }}>
          <Rhythm mb={isLandscape ? 3 : 6} mt={isLandscape ? 3 : 6}>
            <Flex
              alignItems={isLandscape ? 'flex-end' : 'flex-start'}
              alignSelf="center"
              direction={isLandscape ? 'row' : 'column'}
              reverse={isLandscape}
              style={{ [isLandscape ? 'maxHeight' : 'maxWidth']: maxSize }}
            >
              <Rhythm
                mb={isLandscape ? 0 : 10}
                ml={isLandscape ? 10 : 0}
                pb={isLandscape ? 0 : 4}
                pl={isLandscape ? 4 : 0}
              >
                <ColoredIconButton<'a'>
                  as="a"
                  colorId="P10"
                  href={PHORKIT}
                  rel="noopener"
                  target="_blank"
                  {...buttonProps}
                  size={undefined}
                  weight="inline"
                >
                  <PhorkIcon size={maxSize} title="Phork/it component library" />
                </ColoredIconButton>
              </Rhythm>

              <Rhythm m={-2}>
                <Flex
                  wrap
                  alignItems="center"
                  direction={isLandscape && !hackLandscapeWrap ? 'column' : 'row'}
                  reverse={isLandscape}
                >
                  <Flex alignItems="center" direction={isLandscape ? 'column' : 'row'} reverse={isLandscape}>
                    <Rhythm m={2}>
                      <ColoredIconButton<'a'>
                        as="a"
                        colorId="P10"
                        href={GITHUB}
                        rel="noopener"
                        target="_blank"
                        {...buttonProps}
                      >
                        <GithubIcon size={20} title="Github" />
                      </ColoredIconButton>

                      <ColoredIconButton<'a'>
                        as="a"
                        colorId="P15"
                        href={INSTAGRAM}
                        rel="noopener"
                        target="_blank"
                        {...buttonProps}
                      >
                        <InstagramIcon size={20} title="Instagram" />
                      </ColoredIconButton>

                      <ColoredIconButton<'a'>
                        as="a"
                        colorId="P20"
                        href={TWITTER}
                        rel="noopener"
                        target="_blank"
                        {...buttonProps}
                      >
                        <TwitterIcon size={20} title="Twitter" />
                      </ColoredIconButton>
                    </Rhythm>
                  </Flex>
                  <Flex alignItems="center" direction={isLandscape ? 'column' : 'row'} reverse={isLandscape}>
                    <Rhythm m={2}>
                      <ColoredIconButton<'a'>
                        as="a"
                        colorId="P25"
                        href={LINKED_IN}
                        rel="noopener"
                        target="_blank"
                        {...buttonProps}
                      >
                        <LinkedInIcon size={20} title="LinkedIn" />
                      </ColoredIconButton>

                      <ColoredIconButton<'a'>
                        as="a"
                        colorId="P30"
                        href={EMAIL}
                        rel="noopener"
                        target="_blank"
                        {...buttonProps}
                      >
                        <EmailIcon size={20} title="Email" />
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
