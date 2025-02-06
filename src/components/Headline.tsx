import styled from '@emotion/styled';
import { viewports } from 'config/viewports';

export const Headline = styled.div`
  position: relative;
  font-family: Lulo Clean One Bold, Roboto, Helvetica, sans-serif;
  font-size: 42px;

  @media (max-width: ${viewports.small.max}px) {
    font-size: 30px;
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
