import React, { Component } from 'react'
import { Text, View, ScrollView, StatusBar, AsyncStorage, StyleSheet } from 'react-native'
import {Button, Icon, Container, Content} from 'native-base'
import { connect } from "react-redux";
import FilmThumbnail from '../../components/FilmThumbnail'
import FilmBanner from '../../components/FilmBanner'
import {getHighRateFilms} from '../../api/FilmAPI'
import {fetchTopFilms} from './actions/top_films.js'
import {fetchHomeGenres} from './actions/home_genres.js'

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    state = {
        highRateFilms: []
    }

    constructor(props){
        super(props)

        this.props.fetchTopFilms()
        this.props.fetchHomeGenres()
    }

    componentDidMount(){
        getHighRateFilms()
        .then(highRateFilms=>{
            this.setState({highRateFilms})
        })
        .catch(err=>console.error(err))
    }

    _showFilmDetail = (film) => {
        this.props.navigation.navigate('FilmDetail', {film});
    };

    _showProfile = () => {
        this.props.navigation.navigate('Profile');
    };

    _showSearchInput = () => {
        this.props.navigation.navigate('SearchInput');
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <Content>
            <View style={styles.marginTop}></View>
            <View style={styles.topBar}>
                <Button transparent dark style={styles.btnAccount} onPress={()=>this._showProfile()}>
                    <Icon name='person' />
                </Button>
                <Button transparent dark style={styles.btnSearch} onPress={()=>this._showSearchInput()}>
                    <Icon name='search' />
                </Button>
            </View>
            <View style={styles.content}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        this.props.topFilms.topFilms.map(film=>(
                            <FilmBanner key={film._id} src={film.banner} onPress={()=>this._showFilmDetail(film)} />
                        ))
                    }
                </ScrollView>
                <View style={styles.genreContainer}>
                    <Text style={styles.genreTitle}>High rating</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            this.state.highRateFilms.map(film=>(
                                <FilmThumbnail key={film._id} src={film.poster} name={film.name} onPress={()=>this._showFilmDetail(film)} />
                            ))
                        }
                    </ScrollView>
                </View>
                {
                    this.props.genres.homeGenres.map(genre=>(
                        <View key={genre._id} style={styles.genreContainer}>
                            <Text style={styles.genreTitle}>{genre.name}</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {
                                    this.props.genres.homeFilms.filter(film=>film.genre===genre._id).map(film=>(
                                        <FilmThumbnail key={film._id} src={film.poster} name={film.name} onPress={()=>this._showFilmDetail(film)} />
                                    ))
                                }
                            </ScrollView>
                        </View>
                    ))
                }
            </View>
        </Content>
        {/* <Button title="Show me more of the app" onPress={this._showFilmDetail} />
            <Button title="Actually, sign me out :)" onPress={this._signOutAsync} /> */}
      </Container>
    )
  }
}

var styles = StyleSheet.create({
    marginTop: {
        marginTop: 30
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    content: {
        paddingHorizontal: 5
    },
    genreContainer: {
        marginTop: 20
    },
    genreTitle: {
        fontSize: 20,
        marginLeft: 8,
    },
})

const mapStateToProps = (state) => ({
    topFilms: state.topFilmsData,
    genres: state.homeGenresData,
})

const mapDispatchToProps = dispatch => ({
    fetchTopFilms: ()=>dispatch(fetchTopFilms()),
    fetchHomeGenres: ()=>dispatch(fetchHomeGenres())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
