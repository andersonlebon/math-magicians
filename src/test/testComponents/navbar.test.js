import React from 'react';
import { HashRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../../components/navbar';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <HashRouter>
        <Navbar />
      </HashRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
