import styled from '@emotion/styled';
import { viewports } from 'config/viewports';

// The headline has a right margin to remove the extra space added after each letter.
export const Headline = styled.div`
  position: relative;
  font-family: Lulo Clean One Bold, Roboto, Helvetica, sans-serif;
  font-size: 42px;
  margin-right: -12px;
  width: fit-content;

  @media (max-width: ${viewports.small.max}px) {
    font-size: 30px;
    margin-right: -4px;
  }
`;

export const Byline = styled.div`
  position: relative;
  font-family: Lulo Clean One, Roboto, Helvetica, sans-serif;
  font-size: 22px;

  @media (max-width: ${viewports.small.max}px) {
    font-size: 18px;
  }
`;
