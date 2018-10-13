import React, { Component } from 'react'
import { Text, View, StatusBar, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Trailer from "../components/Trailer"

export default class OtherScreen extends Component {

  state = {
    hovLike: false,
    hovFavorite: false,
    hovComment: false
  }

  constructor(props){
    super(props)

    this.onPressLike = this.onPressLike.bind(this)
    this.onPressFavorite = this.onPressFavorite.bind(this)
    this.onPressComment = this.onPressComment.bind(this)
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

        <Trailer image="https://s3img.vcdn.vn/123phim/2018/10/dong-ho-15389642211592.jpg" videoId="q5u6v_W2ztA" />
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
  btnSearch: {
    alignSelf: "flex-end"
  },
  content: {
    paddingHorizontal: 5
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