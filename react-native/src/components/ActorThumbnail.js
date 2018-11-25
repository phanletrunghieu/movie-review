import React, { Component } from 'react'
import { StyleSheet, TouchableWithoutFeedback, Animated, View, Image } from 'react-native'
import PropTypes from 'prop-types';

export default class ActorThumbnail extends Component {
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

ActorThumbnail.propTypes = {
    src: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.object,
};
ActorThumbnail.defaultProps = {
    src: "",
    style: {},
    onPress: ()=>{},
};

var styles = StyleSheet.create({
    button: {
        margin: 8,
        width: 80,
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 120,
        borderRadius: 8
    }
})