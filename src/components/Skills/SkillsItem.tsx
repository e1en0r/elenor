import { Fragment } from 'react';
import { Flex, FlexProps, Rhythm, Typography } from '@phork/phorkit';

export type SkillsItemProps = Omit<FlexProps, 'column'> & {
  label: string;
  skills: Array<string | [string, React.ReactNode]>;
};

export const SkillsItem = ({ label, skills, ...props }: SkillsItemProps): JSX.Element => {
  return (
    <Flex direction="column" {...props}>
      <Rhythm mb={2}>
        <Typography<'div'> as="div" size="3xlarge" weight="bold">
          {label}
        </Typography>
      </Rhythm>

      <Typography size="xlarge">
        {skills.map((skill, index) => {
          const [key, label] = Array.isArray(skill) ? skill : [skill, skill];
          return (
            <Fragment key={key}>
              {label}
              {index < skills.length - 1 ? ', ' : ''}
            </Fragment>
          );
        })}
        .
      </Typography>
    </Flex>
  );
};
