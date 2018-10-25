import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableNativeFeedback } from 'react-native';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';

export default class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <View style={ styles.subcontainer }>
        <Text style={ styles.subheader }>Login</Text>
        <UsernameInput value={ this.state.username } onChangeText={ username => this.setState({ username }) } />
        <PasswordInput value={ this.state.password } onChangeText={ password => this.setState({ password }) } />
        <TouchableNativeFeedback onPress={ () => this.props.onSubmit(this.state.username, this.state.password) }>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>Submit</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subcontainer: {
    flexGrow: 2,
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
