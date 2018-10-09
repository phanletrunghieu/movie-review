import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get("window")

export default class FilmBanner extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                <Image source={{uri: this.props.src}} style={styles.image} />
            </TouchableOpacity>
        )
    }
}

FilmBanner.propTypes = {
    src: PropTypes.string,
    onPress: PropTypes.func
};
FilmBanner.defaultProps = {
    src: "",
    onPress: ()=>{},
};

var styles = StyleSheet.create({
    button: {
        margin: 5,
        width: width - 20,
        alignItems: 'center',
    },
    image: {
        width: width - 20,
        height: (width - 20)/2.4,
        borderRadius: 10
    }
})