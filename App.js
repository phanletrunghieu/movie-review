import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen'
import HomeScreen from './src/screens/HomeScreen'
import OtherScreen from './src/screens/OtherScreen'
import SignInScreen from './src/screens/SignInScreen'

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Other: OtherScreen
});
const AuthStack = createStackNavigator({
  SignIn: SignInScreen
});

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);