import styled from '@emotion/styled';
import { Progress, Rhythm, Typography } from '@phork/phorkit';

export type SkillsItemProps = {
  skill: string;
  competency: 1 | 2 | 3 | 4 | 5;
};

const SkillsItemContainer = styled.div`
  display: contents;
`;

export const SkillsItem = ({ skill, competency }: SkillsItemProps): JSX.Element => {
  return (
    <SkillsItemContainer>
      <Rhythm mr={3}>
        <Typography<'div'> as="div" size="3xlarge">
          {skill}
        </Typography>
      </Rhythm>
      <Progress
        aria-label={`${skill}: ${competency}`}
        color="neutral"
        orientation="horizontal"
        percent={competency * 20}
        size="large"
      />
    </SkillsItemContainer>
  );
};
