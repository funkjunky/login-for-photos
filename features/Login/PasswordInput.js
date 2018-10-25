import React from 'react';

import Input from './Input';

export default props => (
  <Input
    { ...props }
    placeholder="Password"
    secureTextEntry
    textContentType="password"
  />
);
