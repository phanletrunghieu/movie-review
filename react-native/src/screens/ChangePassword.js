import React, { Component } from 'react'
import { Alert, View, Image, StatusBar, StyleSheet, Dimensions, AsyncStorage } from 'react-native'
import {Button, Text, Icon, Container, Content, H1, Form, Item, Input, Label} from 'native-base'
import { connect } from "react-redux";
import LinearGradient from 'react-native-linear-gradient';
import {changePassword} from '../api/UserAPI'
import {uri as avatarURI} from '../assert/default_avatar.png'

const screenHeight = Dimensions.get("window").height
const screenWidth = Dimensions.get("window").width

class ChangePassword extends Component {
    state = {
        avatarURI: avatarURI,
        name: "",

        oldPassword: "",
        newPassword1: "",
        newPassword2: "",
    }

    constructor(props){
        super(props)
    }

    componentDidMount(){
        AsyncStorage.getItem("userData")
        .then(userData => {
            this.userData = JSON.parse(userData)
            
            this.setState({
                avatarURI: this.userData.avatar || avatarURI,
                name: this.userData.full_name,
            })
        })
    }

    onPressChange = () => {
        if (!this.state.oldPassword) {
            return Alert.alert("Error", "Please fill old password")
        }

        if (!this.state.newPassword1) {
            return Alert.alert("Error", "Please fill new password")
        }

        if (!this.state.newPassword2) {
            return Alert.alert("Error", "Please fill new password")
        }

        if (this.state.newPassword1!==this.state.newPassword2) {
            return Alert.alert("Error", "Password not match")
        }

        changePassword(this.state.oldPassword, this.state.newPassword1)
        .then(result=>{
            Alert.alert("Message", "Password's changed!")
        })
        .catch(err=>Alert.alert("Error", err.message || err))
    }

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
                            source={require('../assert/profile_cover.png')}
                        />
                        <Image
                            style={styles.avatar}
                            source={{uri: this.state.avatarURI}}
                        />
                        <H1 style={styles.name}>{this.state.name}</H1>
                    </LinearGradient>
                    <Form style={styles.form}>
                        <Item floatingLabel>
                            <Label>Old password</Label>
                            <Input
                                secureTextEntry
                                textContentType="password"
                                value={this.state.oldPassword}
                                onChangeText={oldPassword=>this.setState({oldPassword})}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>New password</Label>
                            <Input
                                secureTextEntry
                                textContentType="password"
                                value={this.state.newPassword1}
                                onChangeText={newPassword1=>this.setState({newPassword1})}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Repeat new password</Label>
                            <Input
                                secureTextEntry
                                textContentType="password"
                                value={this.state.newPassword2}
                                onChangeText={newPassword2=>this.setState({newPassword2})}
                            />
                        </Item>
                        <Button style={styles.btnSave} onPress={this.onPressChange}>
                            <Text>Change</Text>
                        </Button>
                    </Form>
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
        justifyContent: "space-between",
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
    },
    form: {
        marginHorizontal: 5
    },
    btnSave: {
        alignSelf: "center",
        marginTop: 10,
        backgroundColor: "#ff7200"
    }
})

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)
