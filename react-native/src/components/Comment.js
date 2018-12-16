import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import StarRating from 'react-native-star-rating';

export default class Comment extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.avatar} source={require('../assert/default_avatar.png')}/>
                <View style={styles.commentContent}>
                    <Text style={styles.author}>{this.props.user}</Text>
                    <Text style={styles.comment}>{this.props.review}</Text>
                    <Text style={styles.date}>{this.props.date}</Text>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={this.props.star}
                        containerStyle={styles.starRating}
                        starSize={15}
                    />
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    commentContent: {
        paddingLeft: 5
    },
    author: {
        fontSize: 18,
        fontWeight: "700",
        color: "#000"
    },
    comment: {
        fontSize: 15,
    },
    date: {
        color: "#bbb",
        fontSize: 15,
    },
    starRating: {
        marginVertical: 10,
        width: 20
    },
})
