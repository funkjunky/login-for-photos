import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

// TODO: create alias or mainDir in package.json
import Login from '../features/Login';
import { login } from '../features/Login/api';

const loginFlow = navigation => async (username, password) => {
  try {
    const user = await login(username, password);
    AsyncStorage.setItem('currentUser', user[0]);

    navigation.navigate('PhotosScreen');
  } catch (e) {
    console.log('error: ', e.message, e);
  }
};

export default ({ navigation }) => (
  <View style={ styles.container }>
    <Text style={ styles.header }>Login For Photos</Text>
    <Login onSubmit={ loginFlow(navigation) } />
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
