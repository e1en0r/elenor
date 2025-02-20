import { SkillsItem } from 'components/Skills/SkillsItem';
import { render } from '../../utils';

describe('<SkillsItem />', () => {
  it('renders the page content', () => {
    const { getByText } = render(<SkillsItem label="Mock Skills" skills={['One', 'Two', 'Three']} />);

    expect(getByText('Mock Skills')).toBeTruthy();
    expect(getByText('One, Two, Three.')).toBeTruthy();
  });
});
