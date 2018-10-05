import React, { Component } from 'react'
import { Text, View, Button, StatusBar, AsyncStorage } from 'react-native'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    )
  }
}