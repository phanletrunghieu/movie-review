import React, { Component } from 'react'
import { Text, View, Image, StatusBar, StyleSheet } from 'react-native'
import {Button, Icon, Container, Content, H1} from 'native-base'
import { connect } from "react-redux";
import LinearGradient from 'react-native-linear-gradient';

class ProfileScreen extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <View style={styles.topBar}>
                    <Button transparent onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='ios-arrow-back' style={{color: '#fff'}} />
                    </Button>
                </View>
                <Content>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#F99F00', '#DB3069']} style={styles.linearGradient}>
                        <Image
                            style={styles.profileCoverBottom}
                            source={require('../../assert/profile_cover.png')}
                        />
                        <Image
                            style={styles.avatar}
                            source={require('../../assert/default_avatar.png')}
                        />
                        <H1 style={styles.name}>Hieu Dep Trai</H1>
                    </LinearGradient>
                </Content>
            </Container>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: "#F8F8F8"
    },
    marginTop: {
        marginTop: 30
    },
    linearGradient: {
        height: 300,
        alignItems: "center",
        justifyContent: "center"
    },
    topBar: {
        top: StatusBar.currentHeight,
        flexDirection: "row",
        width: "100%",
        position: "absolute",
        zIndex: 2,
        elevation: 2,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 100,
        backgroundColor: "#fff"
    },
    profileCoverBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: "100%"
    },
    name: {
        color: "#fff"
    }
})

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
