import { PagePaper } from 'components/PagePaper';
import { render } from '../utils';

describe('<PagePaper />', () => {
  it('should render the page content', () => {
    const { getByText } = render(
      <PagePaper autoHeight centered color="primary">
        Content!
      </PagePaper>,
    );

    expect(getByText('Content!')).toBeTruthy();
  });
});
