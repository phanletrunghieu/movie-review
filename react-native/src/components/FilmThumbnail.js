import React, { Component } from 'react'
import { StyleSheet, TouchableWithoutFeedback, Animated, View, Image } from 'react-native'
import PropTypes from 'prop-types';

export default class FilmThumbnail extends Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <Animated.View style={{...styles.button, ...this.props.style}}>
                    <Image source={{uri: this.props.src}} style={styles.image} />
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}

FilmThumbnail.propTypes = {
    src: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.object,
};
FilmThumbnail.defaultProps = {
    src: "",
    style: {},
    onPress: ()=>{},
};

var styles = StyleSheet.create({
    button: {
        margin: 8,
        width: 120,
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 170,
        borderRadius: 8
    }
})