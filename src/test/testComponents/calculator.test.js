import renderer from 'react-test-renderer';
import home from '../../components/home';

it('renders correctly', () => {
  const tree = renderer.create(<home />).toJSON();
  expect(tree).toMatchSnapshot();
});
