import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'
import PropTypes from 'prop-types';

export default class FilmThumbnail extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                <Image source={{uri: this.props.src}} style={styles.image} />
            </TouchableOpacity>
        )
    }
}

FilmThumbnail.propTypes = {
    src: PropTypes.string,
    onPress: PropTypes.func
};
FilmThumbnail.defaultProps = {
    src: "",
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
        borderRadius: 10
    }
})