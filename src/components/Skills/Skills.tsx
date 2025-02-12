import { Flex, Rhythm } from '@phork/phorkit';
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
            'D3',
          ]}
        />
        <SkillsItem
          label="Integrations"
          skills={['GraphQL (Apollo)', 'RESTful APIs', 'WebSockets', 'CI/CD pipelines']}
        />
        <SkillsItem
          label="Build Tools"
          skills={['Webpack', 'Rollup', 'Babel', 'PostCSS', 'ESLint', 'Prettier', 'Git', 'Github Actions']}
        />
        <SkillsItem
          label="Testing & Code Quality"
          skills={['Jest', 'Vitest', 'React Testing Library', 'Playwright', 'code reviews']}
        />
        <SkillsItem
          label="Performance & Optimization"
          skills={['Code Splitting', 'Lazy Loading', 'React Suspense', 'Memoization', 'Micro Frontends']}
        />
        <SkillsItem
          label="Other Tools & Skills"
          skills={['NodeJS', 'MySQL', 'PostgreSQL', 'AWS', 'Docker', 'A11y', 'Linux', 'UI/UX', 'LucidChart', 'Web3']}
        />
      </Rhythm>
    </Flex>
  );
};
