import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('App component testing', () => {
  it('renders two text inputs (username and password)', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
