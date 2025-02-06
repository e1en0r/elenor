import styled from '@emotion/styled';
import { ThemeProps, StraddledTimeline, useThemeId } from '@phork/phorkit';
import { BuzznetIcon, RivianIcon, TbwaIcon, UbiquitiIcon, WevrIcon } from 'icons/logos';
import { TimelineItem } from './TimelineItem';
import { TimelineItemList } from './TimelineItemList';
import { TimelineLabel } from './TimelineLabel';

type TimelineProps = Pick<ThemeProps, 'themeId'> & {
  expanded?: boolean;
  isStraddled?: boolean;
  width?: number;
};

const StyledTimeline = styled(StraddledTimeline)`
  font-size: 14px;
  letter-spacing: 1.2px;
`;

export const Timeline = ({ expanded, isStraddled, themeId: initThemeId, width = 800 }: TimelineProps): JSX.Element => {
  const themeId = useThemeId(initThemeId);
  const leftWidth = isStraddled ? 150 : 0;
  const rightWidth = width - leftWidth;

  const labelWidth = leftWidth || rightWidth;
  const labelPosition = leftWidth ? 'left-center' : 'right-center';

  const itemWidth = rightWidth;
  const itemPosition = 'right-center';

  return (
    <StyledTimeline leftWidth={leftWidth} rightWidth={rightWidth} spacing="cozy">
      <TimelineLabel first position={labelPosition} themeId={themeId} width={labelWidth}>
        2022 - 2024
      </TimelineLabel>
      <TimelineItem
        Logo={RivianIcon}
        backgroundColor="#ffac00"
        company="Rivian"
        expanded={expanded}
        jobTitle="Senior Staff Front End Software Engineer"
        logoColor="#ffffff"
        position={itemPosition}
        tags={[
          { id: 'typescript', label: 'TypeScript' },
          { id: 'react', label: 'React' },
          { id: 'redux', label: 'Redux' },
          { id: 'graphql', label: 'GraphQL' },
        ]}
        themeId={themeId}
        width={itemWidth}
      >
        <TimelineItemList
          accentColor="#ffac00"
          items={[
            'Led front-end development for supply chain apps, driving performance improvements and reducing load times.',
            'Built frameworks and reusable components to standardize development processes and accelerate feature delivery.',
            'Designed application workflows to ensure clarity and alignment across development teams and stakeholders.',
            'Reduced technical debt and led the transition from JavaScript to TypeScript, improving development efficiency.',
            'Collaborated with back-end teams to design and optimize GraphQL API integrations, enhancing data flow efficiency.',
            'Conducted code reviews and diagrammed workflows to uphold standards and ensure cohesive development practices.',
            'Mentored junior developers, instilling best practices and advancing team skills and productivity.',
          ]}
        />
      </TimelineItem>
      <TimelineLabel position={labelPosition} themeId={themeId} width={labelWidth}>
        2011 - 2022
      </TimelineLabel>
      <TimelineItem
        Logo={UbiquitiIcon}
        backgroundColor="#005ed9"
        company="Ubiquiti Networks"
        expanded={expanded}
        jobTitle="Senior Software Engineer"
        logoColor="#ffffff"
        position={itemPosition}
        tags={[
          { id: 'typescript', label: 'TypeScript' },
          { id: 'react', label: 'React' },
          { id: 'angular', label: 'AngularJS' },
          { id: 'backbone', label: 'BackboneJS' },
          { id: 'php', label: 'PHP 5' },
        ]}
        themeId={themeId}
        width={itemWidth}
      >
        <TimelineItemList
          accentColor="#005ed9"
          items={[
            'Led front-end development for multiple generations of the UniFi web app.',
            'Designed and developed reusable code libraries, fostering collaboration and accelerating development across teams.',
            'Optimized application performance, reducing load times and memory usage for a seamless user experience.',
            'Created interactive data visualizations using D3.js, providing actionable insights into network performance.',
            'Conducted comprehensive browser testing and debugging to ensure cross-platform compatibility.',
            'Collaborated with network engineers to design and implement APIs for configuring router hardware settings.',
          ]}
        />
      </TimelineItem>
      <TimelineLabel position={labelPosition} themeId={themeId} width={labelWidth}>
        2009 - 2011
      </TimelineLabel>
      <TimelineItem
        contract
        Logo={TbwaIcon}
        backgroundColor="#ea1d2d"
        company="TBWA Chiat Day"
        expanded={expanded}
        jobTitle="Full Stack Software Engineer"
        logoColor="#ffffff"
        position={itemPosition}
        tags={[
          { id: 'javascript', label: 'JavaScript' },
          { id: 'jquery', label: 'jQuery' },
          { id: 'yui', label: 'YUI' },
        ]}
        themeId={themeId}
        width={itemWidth}
      >
        <TimelineItemList
          accentColor="#ea1d2d"
          items={[
            "Developed the front-end and PHP back-end for Gatorade's Player of the Year website, creating a highly responsive and interactive experience.",
            'Built the admin interface for the award-winning Projeqt app using PHP, HTML, CSS, jQuery, and jQuery UI to enhance user experience.',
            'Created mini-sites for major brands including Energizer, Nissan, and Pepsi.',
            'Contributed to several Facebook applications for Infiniti, demonstrating expertise in delivering high-quality web solutions across multiple industries.',
          ]}
        />
      </TimelineItem>
      <TimelineItem
        contract
        Logo={WevrIcon}
        backgroundColor="#000000"
        company="Wevr"
        expanded={expanded}
        jobTitle="Full Stack Software Engineer"
        logoColor="#ffffff"
        position={itemPosition}
        tags={[
          { id: 'javascript', label: 'JavaScript' },
          { id: 'php', label: 'PHP 5' },
          { id: 'mysql', label: 'MySQL' },
          { id: 'rest', label: 'REST' },
        ]}
        themeId={themeId}
        width={itemWidth}
      >
        <TimelineItemList
          accentColor="#000000"
          items={[
            'Led development of PHP APIs for a suite of iOS/Unity 3D games, ensuring optimized performance and integration.',
            'Implemented Memcache to optimize data handling, improving application response time and reducing server load.',
            'Designed scalable systems to improve game performance and ensure smooth gameplay mechanics.',
            'Designed and developed front-end game UIs, prioritizing user engagement and consistent, intuitive interfaces.',
          ]}
        />
      </TimelineItem>
      <TimelineLabel position={labelPosition} themeId={themeId} width={labelWidth}>
        2007 - 2009
      </TimelineLabel>
      <TimelineItem
        last
        Logo={BuzznetIcon}
        backgroundColor="#000000"
        company="Buzznet"
        expanded={expanded}
        jobTitle="Full Stack Software Engineer"
        logoColor="#ffffff"
        position={itemPosition}
        tags={[
          { id: 'javascript', label: 'JavaScript' },
          { id: 'php', label: 'PHP 5' },
          { id: 'mysql', label: 'MySQL' },
          { id: 'memcache', label: 'Memcache' },
        ]}
        themeId={themeId}
        width={itemWidth}
      >
        <TimelineItemList
          accentColor="#000000"
          items={[
            'Built a high-performance site search engine from scratch using Sphinx, dramatically improving query speed.',
            'Implemented advertising takeovers across partner sites, boosting ad revenue and increasing visibility.',
            'Developed a customizable and themeable Google Maps integration, ensuring quick and seamless integration.',
            'Designed and implemented an intuitive friend management system and news feed, driving greater user engagement.',
            'Optimized data retrieval with Memcache, reducing load times and significantly enhancing site responsiveness.',
          ]}
        />
      </TimelineItem>
    </StyledTimeline>
  );
};

Timeline.displayName = 'Timeline';
