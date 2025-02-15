import { Fragment } from 'react';
import { Flex, Link, Rhythm } from '@phork/phorkit';
import { PHORKIT } from 'config/strings';
import { SkillsItem } from 'components/Skills/SkillsItem';

export type SkillsProps = React.HTMLAttributes<HTMLDivElement>;

export const Skills = (props: SkillsProps): JSX.Element => {
  return (
    <Flex full direction="column" {...props}>
      <Rhythm mb={6}>
        <SkillsItem
          label="Core Front-End Technologies"
          skills={[
            'React',
            'Redux',
            'JavaScript',
            'TypeScript',
            'HTML5',
            'CSS3',
            'Tailwind CSS',
            'Emotion',
            'Vanilla Extract',
            'D3.js',
          ]}
        />
        <SkillsItem
          label="Integrations"
          skills={['GraphQL (Apollo)', 'RESTful APIs', 'WebSockets', 'CI/CD pipelines']}
        />
        <SkillsItem
          label="Build Tools"
          skills={['Webpack', 'Rollup', 'Babel', 'PostCSS', 'ESLint', 'Prettier', 'Git', 'GitHub Actions']}
        />
        <SkillsItem
          label="Testing & Code Quality"
          skills={['Jest', 'Vitest', 'React Testing Library', 'Playwright', 'code reviews']}
        />
        <SkillsItem
          label="Performance & Optimization"
          skills={['React Suspense', 'code splitting', 'lazy loading', 'memoization', 'micro frontends']}
        />
        <SkillsItem
          label="Other Tools & Skills"
          skills={['Node.js', 'MySQL', 'PostgreSQL', 'AWS', 'Docker', 'A11y', 'Linux', 'UI/UX', 'Lucidchart']}
        />
        <SkillsItem
          label="Hobbies"
          skills={[
            [
              'phorkit',
              <Fragment key="phorkit-link">
                Building{' '}
                <Link underline unthemed href={PHORKIT} rel="noopener" target="_blank">
                  Phork/it
                </Link>
              </Fragment>,
            ],
            'crypto',
            'NFTs',
            'mechanical keyboards',
          ]}
        />
      </Rhythm>
    </Flex>
  );
};
