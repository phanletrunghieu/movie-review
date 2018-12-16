import React, { Component } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, Animated, View, Image } from 'react-native'
import PropTypes from 'prop-types';

export default class FilmThumbnail extends Component {
    render() {
        var {width, height} = this.props.style;
        width = width || 120;
        height = height || (width*17/12);

        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <Animated.View style={{...styles.button, ...this.props.style, width, height: height + 25}}>
                    <Image source={{uri: this.props.src}} style={{...styles.image, width, height}} />
                    <Text style={styles.name}>{this.props.name}</Text>
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
        margin: 5,
        alignItems: 'center',
    },
    image: {
        borderRadius: 8
    },
    name: {
        fontSize: 13,
        marginTop: 5,
        color: "#000",
    }
})