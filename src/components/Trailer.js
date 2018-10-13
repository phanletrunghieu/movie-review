import React, { Component } from 'react'
import { StyleSheet, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import YouTube from 'react-native-youtube'
import PropTypes from 'prop-types';
import { View } from 'native-base';

const {width, height} = Dimensions.get("window")

export default class Trailer extends Component {
    state = {
        play: false,
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.play ||
                    <View style={styles.button}>
                        <Image source={{uri: this.props.image}} style={styles.image} />
                        <TouchableWithoutFeedback onPress={()=>this.setState({play: !this.state.play})}>
                            <Image source={require("../assert/play_icon.png")} style={styles.playIcon} />
                        </TouchableWithoutFeedback>
                    </View>
                }
                <YouTube
                    apiKey="AIzaSyB-gnPZG0wKogyAwO24bXQTsXznffETn18"
                    videoId={this.props.videoId}
                    play={this.state.play}
                    fullscreen={false}
                    loop={false}
                    showinfo={false}
                    rel={false}
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => {
                        if(e.state === "paused" || e.state === "stopped")
                            this.setState({play: false})
                        else if(e.state === "playing")
                            this.setState({play: true})
                    }}
                    style={styles.video}
                />
            </View>
        )
    }
}

Trailer.propTypes = {
    image: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
};
Trailer.defaultProps = {};

var styles = StyleSheet.create({
    container: {
        width: width,
        height: width/16*9,
        position: "relative",
    },
    button: {
        width: width,
        height: width/16*9,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 99,
        elevation: 99
    },
    image: {
        width: "100%",
        height: "100%",
    },
    playIcon: {
        position: "absolute",
        top: "50%",
        right: "50%",
        width: 54,
        height: 54,
        transform: [
            {translateX: 27},
            {translateY: -27},
        ],
    },
    video: {
        alignSelf: 'stretch',
        height: width/16*9,
    }
})