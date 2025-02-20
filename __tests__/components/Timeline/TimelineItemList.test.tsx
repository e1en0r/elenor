import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { TimelineItemList } from 'components/Timeline/TimelineItemList';

describe('<TimelineItemList />', () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  const accentColor = '#ff5733';

  it('renders the list items correctly', () => {
    const { getByText } = render(<TimelineItemList accentColor={accentColor} items={items} />);

    items.forEach(item => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });

  it('renders dividers between list items', () => {
    const { container } = render(<TimelineItemList accentColor={accentColor} items={items} />);
    const dividers = container.querySelectorAll('hr');
    expect(dividers.length).toBe(items.length - 1);
  });

  it('does not render a divider after the last item', () => {
    const { container } = render(<TimelineItemList accentColor={accentColor} items={items} />);
    const listItems = container.querySelectorAll('li');
    const lastItem = listItems[listItems.length - 1];

    expect(lastItem.nextSibling?.nodeName).not.toBe('HR');
  });
});
