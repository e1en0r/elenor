import styled from '@emotion/styled';
import { SkillsItem } from 'components/Skills/SkillsItem';

const SkillsContainer = styled.div`
  align-items: center;
  display: grid;
  gap: 16px;
  width: 100%;
  grid-template-columns: max-content 1fr;
`;

export type SkillsProps = React.HTMLAttributes<HTMLDivElement>;

export const Skills = (props: SkillsProps): JSX.Element => {
  return (
    <SkillsContainer {...props}>
      <SkillsItem competency={5} skill="TypeScript" />
      <SkillsItem competency={5} skill="JavaScript" />
      <SkillsItem competency={5} skill="React" />
      <SkillsItem competency={5} skill="React Hooks" />
      <SkillsItem competency={5} skill="HTML" />
      <SkillsItem competency={5} skill="CSS" />
      <SkillsItem competency={5} skill="GraphQL" />
      <SkillsItem competency={4} skill="Redux" />
    </SkillsContainer>
  );
};
