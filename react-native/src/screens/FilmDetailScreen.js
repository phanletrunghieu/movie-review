import React, { Component } from 'react'
import { Animated, View, StatusBar, TouchableOpacity, Image, StyleSheet } from 'react-native'
import {Button, Icon} from 'native-base'
import Trailer from "../components/Trailer"
import FilmThumbnail from '../components/FilmThumbnail'

export default class OtherScreen extends Component {

  state = {
    hovLike: false,
    hovFavorite: false,
    hovComment: false,
    thumbnailMarginTop: new Animated.Value(-80),
  }

  constructor(props){
    super(props)

    this.onPressLike = this.onPressLike.bind(this)
    this.onPressFavorite = this.onPressFavorite.bind(this)
    this.onPressComment = this.onPressComment.bind(this)
    this.onPlay = this.onPlay.bind(this)
    this.onPause = this.onPause.bind(this)
  }

  onPressLike(){
    this.setState({hovLike: !this.state.hovLike})
  }

  onPressFavorite(){
    this.setState({hovFavorite: !this.state.hovFavorite})
  }

  onPressComment(){
    this.setState({hovComment: !this.state.hovComment})
  }

  onPlay(){
    Animated.timing(
      this.state.thumbnailMarginTop,
      {
        toValue: 10,
        duration: 1000,
      }
    ).start();
  }

  onPause(){
    Animated.timing(
      this.state.thumbnailMarginTop,
      {
        toValue: -80,
        duration: 1000,
      }
    ).start();
  }

  render() {
    let srcLike = require('../assert/like_icon_def.png')
    let srcLikeHov = require('../assert/like_icon_hov.png')
    let srcFavorite = require('../assert/favorites_icon_def.png')
    let srcFavoriteHov = require('../assert/favorites_icon_hov.png')
    let srcComment = require('../assert/comment_icon_def.png')
    let srcCommentHov = require('../assert/comment_icon_hov.png')

    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View style={styles.topBar}>
          <Button transparent style={styles.btnSearch} onPress={()=>this.props.navigation.goBack()}>
            <Icon name='ios-arrow-back' style={{color: '#fff'}} />
          </Button>
        </View>
        <Trailer onPlay={this.onPlay} onPause={this.onPause} image="https://s3img.vcdn.vn/123phim/2018/10/dong-ho-15389642211592.jpg" videoId="q5u6v_W2ztA" />
        <FilmThumbnail style={{...styles.thumbnail, marginTop: this.state.thumbnailMarginTop}} src="https://s3img.vcdn.vn/mobile/123phim/2018/10/vi-sao-vut-sang-a-star-is-born-15385357451876_220x310.jpg"/>
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={this.onPressLike}>
            <Image
              style={styles.bottomNavButton}
              source={this.state.hovLike ? srcLikeHov : srcLike}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressFavorite}>
            <Image
              style={styles.bottomNavButton}
              source={this.state.hovFavorite ? srcFavoriteHov : srcFavorite}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressComment}>
            <Image
              style={styles.bottomNavButton}
              source={this.state.hovComment ? srcCommentHov : srcComment}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  marginTop: {
    marginTop: 30
  },
  topBar: {
    top: StatusBar.currentHeight,
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    zIndex: 2,
    elevation: 2,
  },
  thumbnail: {
    marginLeft: 10,
    zIndex: 3,
    elevation: 3,
  },
  bottomNav: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    position: "absolute",
    bottom: 5
  },
  bottomNavButton: {

  }
})