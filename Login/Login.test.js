import React from 'react';
import renderer from 'react-test-renderer';

import Login from './Login';

describe('Login component testing', () => {
  it('renders two text inputs (username and password)', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
