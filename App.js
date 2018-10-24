import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './Login';

export default () => (
  <View style={ styles.container }>
    <Text style={ styles.header }>Login For Photos</Text>
    <Login />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 50,
  },
  header: {
    fontSize: 60,
    textAlign: 'center',
    flexGrow: 1,
  },
});
