import React, { Component } from 'react'
import {
  Text,
  View,
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {CheckToken} from '../api/UserAPI'

export default class AuthLoadingScreen extends Component {

  minTimeWait = 2000

  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    let self = this
    const userToken = await AsyncStorage.getItem('userToken');

    let timeStart = Date.now()
    CheckToken(userToken)
    .then(()=>{
      let timeEnd = Date.now()
      let timePass = timeEnd - timeStart
      if (timePass >= self.minTimeWait) {
        self.props.navigation.navigate(userToken ? 'App' : 'Auth');
      } else {
        setTimeout(() => {
          self.props.navigation.navigate(userToken ? 'App' : 'Auth');
        }, self.minTimeWait - timePass);
      }
    })
  };

  render() {
    return (
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#F99F00', '#DB3069']} style={styles.linearGradient}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View>
          <Image source={require("../assert/logo.png")} />
          <ActivityIndicator style={styles.loading} />
        </View>
      </LinearGradient>
    )
  }
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  loading: {
    marginTop: 15
  }
})