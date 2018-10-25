import React from 'react';
import renderer from 'react-test-renderer';

import Login from './Login';

// TODO: proper component unit testing with Enzyme
describe('Login component testing', () => {
  it('Check to see if the last rendering of the component matches the current rendering', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
