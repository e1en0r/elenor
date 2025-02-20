import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Headline, Byline, Section, SubSection } from 'components/Headline';

describe('Styled Components', () => {
  it('applies default styles correctly for Headline', () => {
    const { container } = render(<Headline />);
    const element = container.firstChild as HTMLElement;

    expect(element).toHaveStyle('font-family: Lulo Clean One Bold,Roboto,Helvetica,sans-serif');
    expect(element).toHaveStyle('font-size: 42px');
    expect(element).toHaveStyle('font-weight: normal');
    expect(element).toHaveStyle('margin: 0px -12px 0px 0px');
    expect(element).toHaveStyle('padding: 0');
    expect(element).toHaveStyle('position: relative');
    expect(element).toHaveStyle('width: fit-content');
  });

  it('applies default styles correctly for Byline', () => {
    const { container } = render(<Byline />);
    const element = container.firstChild as HTMLElement;

    expect(element).toHaveStyle('font-family: Lulo Clean One,Roboto,Helvetica,sans-serif');
    expect(element).toHaveStyle('font-size: 22px');
    expect(element).toHaveStyle('font-weight: normal');
    expect(element).toHaveStyle('margin: 0');
    expect(element).toHaveStyle('padding: 0');
    expect(element).toHaveStyle('position: relative');
  });

  it('inherits Headline styles and changes element to h3 for Section', () => {
    const { container } = render(<Section />);
    const element = container.firstChild as HTMLElement;

    expect(element).toHaveStyle('font-family: Lulo Clean One Bold,Roboto,Helvetica,sans-serif');
    expect(element).toHaveStyle('font-size: 42px');
    expect(element).toHaveStyle('font-weight: normal');
    expect(element.nodeName).toBe('H3');
  });

  it('inherits Byline styles and changes element to div for SubSection', () => {
    const { container } = render(<SubSection />);
    const element = container.firstChild as HTMLElement;

    expect(element).toHaveStyle('font-family: Lulo Clean One,Roboto,Helvetica,sans-serif');
    expect(element).toHaveStyle('font-size: 22px');
    expect(element).toHaveStyle('font-weight: normal');
    expect(element.nodeName).toBe('DIV');
  });
});
