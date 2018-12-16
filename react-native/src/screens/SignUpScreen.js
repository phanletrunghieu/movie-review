import React, { Component } from 'react'
import { StyleSheet, StatusBar, View, Image, Alert } from 'react-native'
import { Form, Item, Input, Button, Text, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {Signup} from '../api/UserAPI'

export default class SignUpScreen extends Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    state = {
        username: "",
        full_name: "",
        password: "",
        showPassword: false,
    }

    _signUpAsync = async () => {
        let {username, full_name, password} = this.state
        Signup(username, full_name, password)
        .then(()=>{
            this.props.navigation.replace('SignIn');
        })
        .catch(err=>Alert.alert('Error', err.message || err))
        
    };

    render() {
        return (
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#F99F00', '#DB3069']} style={styles.linearGradient}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <Image source={require("../assert/logo.png")} />
                <View style={styles.content}>
                    <Form style={styles.form}>
                        <Item regular style={styles.item}>
                            <Input
                                placeholder="Username"
                                value={this.state.username}
                                onChangeText={username => this.setState({username})}
                                style={styles.input}
                                textContentType="username"
                                autoFocus
                            />
                        </Item>
                        <Item regular style={styles.item}>
                            <Input
                                placeholder="Full name"
                                value={this.state.full_name}
                                onChangeText={full_name => this.setState({full_name})}
                                style={styles.input}
                                textContentType="username"
                            />
                        </Item>
                        <Item regular style={styles.item}>
                            <Input
                                placeholder="Password"
                                style={styles.input}
                                textContentType="password"
                                value={this.state.password}
                                onChangeText={password => this.setState({password})}
                                keyboardType={this.state.showPassword ? "visible-password" : "default"}
                                secureTextEntry={true}
                            />
                        </Item>
                    </Form>
                    <View style={styles.buttonContainer}>
                        <Button rounded light block onPress={this._signUpAsync} style={styles.button}>
                            <Text>Signup</Text>
                        </Button>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        width: "95%",
    },
    form: {
        marginVertical: 5
    },
    item: {
        borderColor: "#fff",
        marginTop: 5
    },
    input: {
        color: "#fff",
    },
    buttonContainer: {
        width: "50%",
        alignSelf: "center"
    },
    button: {
        marginTop: 5
    },
    btnShowPass: {
        marginRight: 5
    }
})