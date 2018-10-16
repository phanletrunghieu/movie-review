import React, { Component } from 'react'
import { Text, View, ScrollView, StatusBar, AsyncStorage, StyleSheet } from 'react-native'
import {Button, Icon} from 'native-base'
import FilmThumbnail from '../components/FilmThumbnail'
import FilmBanner from '../components/FilmBanner'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  _showFilmDetail = () => {
    this.props.navigation.navigate('FilmDetail');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View style={styles.marginTop}></View>
        <Button transparent dark style={styles.btnSearch}>
          <Icon name='search' />
        </Button>
        <View style={styles.content}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FilmBanner src="https://s3img.vcdn.vn/123phim/2018/10/johnny-english-15386227274357.jpg" onPress={this._showFilmDetail} />
            <FilmBanner src="https://s3img.vcdn.vn/123phim/2018/10/ke-hoach-doi-chong-15390539760186.jpg" onPress={this._showFilmDetail} />
            <FilmBanner src="https://s3img.vcdn.vn/123phim/2018/10/dong-ho-15389642211592.jpg" onPress={this._showFilmDetail} />
            <FilmBanner src="https://s3img.vcdn.vn/123phim/2018/10/chu-oi-dung-lay-me-con-15389652900498.jpg" onPress={this._showFilmDetail} />
          </ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FilmThumbnail src="https://s3img.vcdn.vn/mobile/123phim/2018/10/vi-sao-vut-sang-a-star-is-born-15385357451876_220x310.jpg" onPress={this._showFilmDetail} />
            <FilmThumbnail src="https://s3img.vcdn.vn/mobile/123phim/2018/09/ngoi-nha-co-chiec-dong-ho-ma-thuat-15380440089530_370x490.jpg" onPress={this._showFilmDetail} />
            <FilmThumbnail src="https://s3img.vcdn.vn/mobile/123phim/2018/09/chan-nho-ban-o-dau-smallfoot-15380440216868_370x490.jpg" onPress={this._showFilmDetail} />
            <FilmThumbnail src="https://s3img.vcdn.vn/mobile/123phim/2018/09/a-x-l-chu-cho-robot-c13-15380437444994_370x490.png" onPress={this._showFilmDetail} />
          </ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FilmThumbnail src="https://s3img.vcdn.vn/mobile/123phim/2018/09/a-x-l-chu-cho-robot-c13-15380437444994_370x490.png" onPress={this._showFilmDetail} />
            <FilmThumbnail src="https://s3img.vcdn.vn/mobile/123phim/2018/09/chan-nho-ban-o-dau-smallfoot-15380440216868_370x490.jpg" onPress={this._showFilmDetail} />
            <FilmThumbnail src="https://s3img.vcdn.vn/mobile/123phim/2018/09/ngoi-nha-co-chiec-dong-ho-ma-thuat-15380440089530_370x490.jpg" onPress={this._showFilmDetail} />
            <FilmThumbnail src="https://s3img.vcdn.vn/mobile/123phim/2018/10/vi-sao-vut-sang-a-star-is-born-15385357451876_220x310.jpg" onPress={this._showFilmDetail} />
          </ScrollView>
        </View>
        <Button title="Show me more of the app" onPress={this._showFilmDetail} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  marginTop: {
    marginTop: 30
  },
  btnSearch: {
    alignSelf: "flex-end"
  },
  content: {
    paddingHorizontal: 5
  }
})