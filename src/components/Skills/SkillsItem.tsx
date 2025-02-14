import { Flex, FlexProps, Rhythm, Typography } from '@phork/phorkit';

export type SkillsItemProps = Omit<FlexProps, 'column'> & {
  label: string;
  skills: string[];
};

export const SkillsItem = ({ label, skills, ...props }: SkillsItemProps): JSX.Element => {
  return (
    <Flex direction="column" {...props}>
      <Rhythm mb={2}>
        <Typography<'div'> as="div" size="3xlarge" weight="bold">
          {label}
        </Typography>
      </Rhythm>

      <Typography size="xlarge">{skills.join(', ')}.</Typography>
    </Flex>
  );
};
