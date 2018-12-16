import React, { Component } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Dimensions, Image } from 'react-native'
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get("window")

export default class FilmBanner extends Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={styles.button}>
                    <Image source={{uri: this.props.src}} style={styles.image} />
                </View>
            </TouchableWithoutFeedback>
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