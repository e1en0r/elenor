import { Fragment, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Flex, Rhythm, ColoredIconButton, ColoredIconButtonProps, useGetHeight, useGetWidth } from '@phork/phorkit';
import { APP_NAME, GITHUB, INSTAGRAM, LINKEDIN, PHORKIT } from 'config/strings';
import { CreditsButton } from 'components/CreditsButton';
import { PagePaper } from 'components/PagePaper';
import { showLandscapeLayout } from 'utils/sizeUtils';
import { GithubIcon } from 'icons/GithubIcon';
import { HeartIcon } from 'icons/HeartIcon';
import { InstagramIcon } from 'icons/InstagramIcon';
import { LinkedinIcon } from 'icons/LinkedinIcon';
import { PhorkIcon } from 'icons/PhorkIcon';

type Size = 'small' | 'medium' | 'large';

type SizeProps = {
  iconSize: ColoredIconButtonProps['size'];
  maxSize: number;
  iconMargin: number;
};

const sizes: Record<Size, SizeProps> = {
  small: {
    maxSize: 210,
    iconSize: 'xlarge',
    iconMargin: 2,
  },
  medium: {
    maxSize: 250,
    iconSize: '2xlarge',
    iconMargin: 3,
  },
  large: {
    maxSize: 264,
    iconSize: '3xlarge',
    iconMargin: 3,
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

export const Links = memo(function Links() {
  const height = useGetHeight();
  const width = useGetWidth();

  const isTooSmallForLandscape = width !== undefined && width < 460;
  const isTooBigForLandscape = height !== undefined && height > 730;

  const isLandscape = !isTooSmallForLandscape && !isTooBigForLandscape && showLandscapeLayout(width, height);
  const { maxSize, iconSize, iconMargin } = isLandscape ? getSizesByHeight(height) : getSizesByWidth(width);

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
                mb={isLandscape ? 0 : 6}
                ml={isLandscape ? 6 : 0}
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

              <Rhythm m={-iconMargin}>
                <Flex wrap alignItems="center" direction={isLandscape ? 'column' : 'row'} reverse={isLandscape}>
                  <Flex alignItems="center" direction={isLandscape ? 'column' : 'row'} reverse={isLandscape}>
                    <Rhythm m={iconMargin}>
                      <ColoredIconButton<'a'>
                        as="a"
                        colorId="P10"
                        href={LINKEDIN}
                        rel="noopener"
                        target="_blank"
                        {...buttonProps}
                      >
                        <LinkedinIcon size={20} title="LinkedIn" />
                      </ColoredIconButton>

                      <ColoredIconButton<'a'>
                        as="a"
                        colorId="P20"
                        href={GITHUB}
                        rel="noopener"
                        target="_blank"
                        {...buttonProps}
                      >
                        <GithubIcon size={20} title="GitHub" />
                      </ColoredIconButton>
                    </Rhythm>
                  </Flex>
                  <Flex alignItems="center" direction={isLandscape ? 'column' : 'row'} reverse={isLandscape}>
                    <Rhythm m={iconMargin}>
                      <ColoredIconButton<'a'>
                        as="a"
                        colorId="P30"
                        href={INSTAGRAM}
                        rel="noopener"
                        target="_blank"
                        {...buttonProps}
                      >
                        <InstagramIcon size={20} title="Instagram" />
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
