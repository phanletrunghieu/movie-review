import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Container } from 'native-base'
import ImageBrowser from 'react-native-interactive-image-gallery'

export default class FilmImages extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <ImageBrowser images={this.props.navigation.getParam('images')} />
            </Container>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: "#000"
    }
})