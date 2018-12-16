import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Comment from './Comment'

export default class GroupComment extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Comment user={this.props.review.user.full_name} review={this.props.review.body} star={this.props.review.star} date={this.props.review.date_created} />
            {
                this.props.review.comments && this.props.review.comments.length > 0 && (
                    <View style={styles.subContainer}>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                    </View>
                )
            }
        </View>
    )
  }
}

var styles = StyleSheet.create({
    container: {
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
    },
    subContainer: {
        paddingLeft: 30,
    }
})
