import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default props => <TextInput { ...props } style={ style.input } />;

const style = StyleSheet.create({
  input: {
    fontSize: 40,
    minWidth: 185,
  },
});
