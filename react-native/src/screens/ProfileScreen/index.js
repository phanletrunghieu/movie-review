import React, { Component } from 'react'
import { Text, View, Image, StatusBar, StyleSheet, Dimensions } from 'react-native'
import {Button, Icon, Container, Content, H1, Tab, Tabs} from 'native-base'
import { connect } from "react-redux";
import LinearGradient from 'react-native-linear-gradient';
import FilmThumbnail from '../../components/FilmThumbnail'
import {fetchLikedFilms} from './actions/liked_film'
import {fetchFavoriteFilms} from './actions/favorite_film'

const screenHeight = Dimensions.get("window").height
const screenWidth = Dimensions.get("window").width

class ProfileScreen extends Component {
    constructor(props){
        super(props)

        this.props.fetchLikedFilms()
    }

    _showFilmDetail = (film) => {
        this.props.navigation.navigate('FilmDetail', {film});
    };

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
