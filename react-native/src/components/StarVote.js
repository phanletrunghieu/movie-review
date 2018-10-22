import React, {
    Component
} from 'react'
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Dimensions,
    Image
} from 'react-native'

export default class StarVote extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require("../assert/star_icon.png")} style={styles.star} />
                <Image source={require("../assert/star_icon.png")} style={styles.star} />
                <Image source={require("../assert/star_icon.png")} style={styles.star} />
                <Image source={require("../assert/star_icon.png")} style={styles.star} />
                <Image source={require("../assert/star_icon_1.png")} style={styles.star} />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    star: {
        marginHorizontal: 2,
    },
})
