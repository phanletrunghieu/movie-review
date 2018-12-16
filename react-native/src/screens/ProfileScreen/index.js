import React, { Component } from 'react'
import { TouchableWithoutFeedback, View, Image, StatusBar, StyleSheet, Dimensions, AsyncStorage } from 'react-native'
import {Button, Icon, Container, Content, H1, Tab, Tabs, ActionSheet} from 'native-base'
import { connect } from "react-redux";
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import DialogInput from 'react-native-dialog-input';
import FilmThumbnail from '../../components/FilmThumbnail'
import {fetchLikedFilms} from './actions/liked_film'
import {fetchFavoriteFilms} from './actions/favorite_film'
import {uploadAvatar, updateUser} from '../../api/UserAPI'
import {uri as avatarURI} from '../../assert/default_avatar.png'

const screenHeight = Dimensions.get("window").height
const screenWidth = Dimensions.get("window").width

class ProfileScreen extends Component {
    state = {
        showDialogUdate: false,
        avatarURI: avatarURI,
        name: "",
    }

    constructor(props){
        super(props)

        this.props.fetchLikedFilms()
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

    _showFilmDetail = (film) => {
        this.props.navigation.navigate('FilmDetail', {film});
    };

    submitEditProfile = (full_name) => {
        updateUser({full_name})
        .then(user=>{
            Object.assign(this.userData, user)
            this.setState({
                name: this.userData.full_name,
                showDialogUdate: false,
            })
            AsyncStorage.setItem("userData", JSON.stringify(this.userData))
        })
    }

    showMenu = () => {
        ActionSheet.show(
            {
                options: ["Update name", "Change password", "Signout", "Cancel"],
                cancelButtonIndex: 3,
                destructiveButtonIndex: 3,
                title: "Menu"
            },
            buttonIndex => {
                if(buttonIndex===0){
                    this.setState({showDialogUdate: true})
                } else if(buttonIndex === 1) {
                    this.props.navigation.navigate('ChangePassword');
                } else if(buttonIndex === 2) {
                    this.signout()
                }
            }
        )
    }

    signout = () => {
        AsyncStorage.clear()
        this.props.navigation.navigate('Auth');
    }

    onPressAvatar = () => {
        const options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                let newAvatarURI;
                uploadAvatar(response)
                .then(result => {
                    newAvatarURI = result.url;
                    this.setState({avatarURI: newAvatarURI})
                    return AsyncStorage.getItem("userData")
                })
                .then(userData=>{
                    userData = JSON.parse(userData)
                    userData.avatar = newAvatarURI
                    return AsyncStorage.setItem("userData", JSON.stringify(userData))
                })
            }
        });
    }

    render() {
        return (
            <Container style={styles.container}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <View style={styles.topBar}>
                    <Button transparent onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='ios-arrow-back' style={{color: '#fff'}} />
                    </Button>
                    <Button transparent onPress={this.showMenu}>
                        <Icon name='md-more' style={{color: '#fff'}} />
                    </Button>
                </View>
                <Content>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#F99F00', '#DB3069']} style={styles.linearGradient}>
                        <Image
                            style={styles.profileCoverBottom}
                            source={require('../../assert/profile_cover.png')}
                        />
                        <TouchableWithoutFeedback onPress={this.onPressAvatar}>
                            <Image
                                style={styles.avatar}
                                source={{uri: this.state.avatarURI}}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=>this.setState({showDialogUdate: true})}>
                            <H1 style={styles.name}>{this.state.name}</H1>
                        </TouchableWithoutFeedback>
                    </LinearGradient>
                    <Tabs tabContainerStyle={{elevation:0}} tabBarUnderlineStyle={{backgroundColor: "transparent"}}>
                        <Tab
                            textStyle={styles.tabHeadTextStyle}
                            activeTextStyle={styles.tabHeadTextStyleActive}
                            tabStyle={styles.tabHeading}
                            activeTabStyle={styles.tabHeading}
                            style={styles.tabPage}
                            heading="Liked"
                        >
                            {
                                this.props.likedFilmsData.likedFilms.map(film=>(
                                    <FilmThumbnail
                                        key={film._id}
                                        src={film.poster}
                                        onPress={()=>this._showFilmDetail(film)}
                                        style={styles.film}
                                    />
                                ))
                            }
                        </Tab>
                        <Tab
                            textStyle={styles.tabHeadTextStyle}
                            activeTextStyle={styles.tabHeadTextStyleActive}
                            tabStyle={styles.tabHeading}
                            activeTabStyle={styles.tabHeading}
                            style={styles.tabPage}
                            heading="Favorite"
                        >
                            {
                                this.props.favoriteFilmsData.favoriteFilms.map(film=>(
                                    <FilmThumbnail
                                        key={film._id}
                                        src={film.poster}
                                        onPress={()=>this._showFilmDetail(film)}
                                        style={styles.film}
                                    />
                                ))
                            }
                        </Tab>
                    </Tabs>
                </Content>
                <DialogInput
                    isDialogVisible={this.state.showDialogUdate}
                    title={"Edit name"}
                    submitInput={(inputText) => this.submitEditProfile(inputText)}
                    closeDialog={() => this.setState({showDialogUdate: false})}
                />
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
    tabHeading: {
        backgroundColor: "#F8F8F8"
    },
    tabHeadTextStyle: {
        color: "#000",
        fontWeight: "400"
    },
    tabHeadTextStyleActive: {
        color: "#000",
        fontWeight: "700"
    },
    tabPage: {
        backgroundColor: "#F8F8F8",
        minHeight: screenHeight-300-50,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    film: {
        width: screenWidth/3 - 10
    }
})

const mapStateToProps = (state) => ({
    likedFilmsData: state.likedFilmsData,
    favoriteFilmsData: state.favoriteFilmsData
})

const mapDispatchToProps = dispatch => ({
    fetchLikedFilms: ()=>dispatch(fetchLikedFilms()),
    fetchFavoriteFilms: ()=>dispatch(fetchFavoriteFilms()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
