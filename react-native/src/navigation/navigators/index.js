import React, {Component} from 'react';
import {Easing, Animated} from 'react-native'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import AuthLoadingScreen from '../../screens/AuthLoadingScreen'
import HomeScreen from '../../screens/Home'
import FilmDetailScreen from '../../screens/FilmDetail'
import SignInScreen from '../../screens/SignInScreen'
import ProfileScreen from '../../screens/ProfileScreen'

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 500,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps

            const thisSceneIndex = scene.index
            const width = layout.initWidth

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            })

            return { transform: [ { translateX } ] }
        },
    }
}

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    FilmDetail: FilmDetailScreen,
    Profile: ProfileScreen,
  },
  {
      headerMode: 'none',
      transitionConfig,
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
