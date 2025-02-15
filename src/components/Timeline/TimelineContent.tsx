import { Fragment } from 'react';
import { ThemeProps, useThemeId } from '@phork/phorkit';
import { RivianIcon, TbwaIcon, UbiquitiIcon } from 'icons/logos';
import { TimelineItem } from './TimelineItem';
import { TimelineItemList } from './TimelineItemList';
import { TimelineLabel } from './TimelineLabel';

type TimelineContentProps = Pick<ThemeProps, 'themeId'> & {
  expanded?: boolean;
  itemPosition: 'left-center' | 'right-center';
  itemWidth: number;
  labelPosition: 'left-center' | 'right-center';
  labelWidth: number;
};

export const TimelineContent = ({
  expanded,
  itemPosition,
  itemWidth,
  labelPosition,
  labelWidth,
  themeId: initThemeId,
}: TimelineContentProps): JSX.Element => {
  const themeId = useThemeId(initThemeId);

  return (
    <Fragment>
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
        last
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
          { id: 'jqueryui', label: 'jQuery UI' },
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
    </Fragment>
  );
};

TimelineContent.displayName = 'TimelineContent';
