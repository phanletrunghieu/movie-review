import React, {Component} from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import AuthLoadingScreen from '../../screens/AuthLoadingScreen'
import HomeScreen from '../../screens/HomeScreen'
import OtherScreen from '../../screens/OtherScreen'
import SignInScreen from '../../screens/SignInScreen'

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Other: OtherScreen
  },
  {
    headerMode: 'none',
  }
);
const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen
  },
  {
    headerMode: 'none',
  }
);

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
    headerMode: 'none'
  }
);