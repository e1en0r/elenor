import styled from '@emotion/styled';
import { IconGroup, Flex, Link, Rhythm, SvgIconProps } from '@phork/phorkit';
import * as icons from '../icons';

export type IconSource = ({ name, url }: { name?: string; url?: string }) => JSX.Element;

export type IconCredit = {
  id: string;
  icon: React.FC<SvgIconProps>;
  name: string;
  url: string;
  src: IconSource;
};

/* prettier-ignore */
const iconSources: {
  flatIcon: IconSource;
  freeIcons: IconSource;
  other: IconSource;
  theNounProject: IconSource;
} = {
  flatIcon: ({ name, url }) => <div>Icon made by <a href={url} rel="noopener" title={name}>{name}</a> from <a href="https://www.flaticon.com/" title="Flaticon">flaticon.com</a></div>,
  freeIcons: ({ name, url }) =>   <div>Icon made by <a href={url} rel="noopener" title={name}>{name}</a> on <a href="https://freeicons.io" title="freeicons.io">freeicons.io</a></div>,
  other: ({ name, url }) => <div>Icon made by <a href={url} rel="noopener" title={name}>{name}</a></div>,
  theNounProject: ({ name, url }) => <div>Icon made by <a href={url} rel="noopener" title={name}>{name}</a> from <a href="https://thenounproject.com/" title="the Noun Project">the Noun Project</a></div>
}

export const iconCredits: IconCredit[] = [
  {
    id: 'github',
    icon: icons.GithubIcon,
    name: 'Guillaume Beaulieu',
    url: 'https://thenounproject.com/ggggb9/',
    src: iconSources.theNounProject,
  },
  {
    id: 'heart',
    icon: icons.HeartIcon,
    name: 'Freepik',
    url: 'https://www.flatIcon.com/authors/freepik',
    src: iconSources.flatIcon,
  },
  {
    id: 'instagram',
    icon: icons.InstagramIcon,
    name: 'Mas Dhimas',
    url: 'https://thenounproject.com/mas_dhimas/',
    src: iconSources.theNounProject,
  },
  {
    id: 'notFound',
    icon: icons.NotFoundIcon,
    name: 'Freepik',
    url: 'https://www.flaticon.com/authors/freepik',
    src: iconSources.flatIcon,
  },
  {
    id: 'twitter',
    icon: icons.TwitterIcon,
    name: 'Muhammad Haq',
    url: 'https://freeicons.io/profile/823',
    src: iconSources.freeIcons,
  },
];

const IconContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 10px;
  height: 80px;
  justify-content: flex-start;
  margin: 8px 12px;
  text-align: center;
  width: 60px;
`;

export const IconCredits = (): JSX.Element => {
  return (
    <IconGroup justifyContent="center" size={40}>
      <Rhythm grouped ml={-3} mr={-3}>
        <Flex wrap alignItems="center" direction="row" justifyContent="center">
          {iconCredits.map(({ icon: Icon, id, name, url }) => (
            <IconContainer key={id}>
              <Icon aria-label={`${id} icon`} title={id} />

              {name && (
                <Rhythm mt={2}>
                  {url ? (
                    <Link href={url} rel="noopener noreferrer" target="_blank">
                      {name}
                    </Link>
                  ) : (
                    name
                  )}
                </Rhythm>
              )}
            </IconContainer>
          ))}
        </Flex>
      </Rhythm>
    </IconGroup>
  );
};

IconCredits.displayName = 'IconCredits';
