import styled from '@emotion/styled';
import { viewports } from 'config/viewports';

// The headline has a right margin to remove the extra space added after each letter.
export const Headline = styled.h1`
  font-family: Lulo Clean One Bold, Roboto, Helvetica, sans-serif;
  font-size: 42px;
  font-weight: normal;
  margin: 0;
  margin-right: -12px;
  padding: 0;
  position: relative;
  width: fit-content;

  @media (max-width: ${viewports.small.max}px) {
    font-size: 28px;
    margin-right: -4px;
  }
`;

export const Byline = styled.h2`
  font-family: Lulo Clean One, Roboto, Helvetica, sans-serif;
  font-size: 22px;
  font-weight: normal;
  margin: 0;
  padding: 0;
  position: relative;

  @media (max-width: ${viewports.small.max}px) {
    font-size: 18px;
  }
`;

export const Section = Headline.withComponent('h3');

export const SubSection = Byline.withComponent('div');
