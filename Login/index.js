import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableNativeFeedback } from 'react-native';

export default onSubmit => (
  <View style={ styles.subcontainer }>
    <Text style={ styles.subheader }>Login</Text>
    <TextInput style={ styles.input } placeholder="Username" textContentType="username" />
    <TextInput style={ styles.input } placeholder="Password" secureTextEntry textContentType="password" />
    <TouchableNativeFeedback onPress={ onSubmit }>
      <View style={ styles.button }>
        <Text style={ styles.buttonText }>Submit</Text>
      </View>
    </TouchableNativeFeedback>
  </View>
);

const styles = StyleSheet.create({
  subcontainer: {
    flexGrow: 2,
  },
  input: {
    fontSize: 40,
    minWidth: 185,
  },
  subheader: {
    fontSize: 50,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 40,
    color: 'black',
  },
  button: {
    margin: 20,
    padding: 5,
    backgroundColor: '#AAAAFF',
    borderRadius: 5,
    elevation: 2,
  },
});
