import styled from '@emotion/styled';
import React from 'react';
import { Divider } from '@phork/phorkit';
import { viewports } from 'config/viewports';

const StyledList = styled.ul<{ accentColor: string }>`
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: relative;

  @media (min-width: ${viewports.small.min}px) {
    padding-left: 100px;

    &:before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100px;
      bottom: 0;
      background: ${({ accentColor }) => accentColor};
      opacity: 0.2;
    }
  }
`;

const StyledListItem = styled.li`
  position: relative;
  margin: 0;
  padding: 24px;
`;

type TimelineItemListProps = Omit<React.HTMLAttributes<HTMLUListElement>, 'children'> & {
  accentColor: string;
  items: string[];
};

export const TimelineItemList = ({ accentColor, items, ...props }: TimelineItemListProps): JSX.Element => {
  return (
    <StyledList accentColor={accentColor} {...props}>
      {items.map((item, index) => (
        <React.Fragment key={item}>
          <StyledListItem>{item}</StyledListItem>
          {index < items.length - 1 && <Divider volume="quietest" />}
        </React.Fragment>
      ))}
    </StyledList>
  );
};

TimelineItemList.displayName = 'TimelineItemList';
