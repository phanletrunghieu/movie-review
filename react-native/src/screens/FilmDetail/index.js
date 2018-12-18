import React, {
    Component
} from 'react'
import {
    Animated,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet
} from 'react-native'
import {Button, Text, Icon, Container, Content} from 'native-base'
import { connect } from "react-redux";
import Trailer from "../../components/Trailer"
import FilmThumbnail from '../../components/FilmThumbnail'
import ActorThumbnail from '../../components/ActorThumbnail'
import StarVote from '../../components/StarVote'
import {fetchLikedFilms, likeFilm, unlikeFilm} from '../ProfileScreen/actions/liked_film'
import {fetchFavoriteFilms, favoriteFilm, unfavoriteFilm} from '../ProfileScreen/actions/favorite_film'
import StarRating from 'react-native-star-rating';
import {findById} from '../../api/FilmAPI'

class FilmDetailScreen extends Component {

    state = {
        hovComment: false,
        thumbnailMarginTop: new Animated.Value(-80),
    }

    constructor(props) {
        super(props)

        this.film = props.navigation.getParam('film')

        this.onPressLike = this.onPressLike.bind(this)
        this.onPressFavorite = this.onPressFavorite.bind(this)
        this.onPressComment = this.onPressComment.bind(this)
        this.onPressImageScreen = this.onPressImageScreen.bind(this)
        this.onPlay = this.onPlay.bind(this)
        this.onPause = this.onPause.bind(this)

        this.props.fetchLikedFilms()
        this.props.fetchFavoriteFilms()
    }

    componentDidMount(){
        findById(this.film._id)
        .then(film=>this.film = film)
    }

    onPressLike() {
        if (!!this.hovLike) {
            this.props.unlikeFilm(this.film._id)
        } else {
            this.props.likeFilm(this.film._id)
        }
    }

    onPressFavorite() {
        if (!!this.hovFavorite) {
            this.props.unfavoriteFilm(this.film._id)
        } else {
            this.props.favoriteFilm(this.film._id)
        }
    }

    onPressComment() {
        this.setState({
            hovComment: !this.state.hovComment
        })

        this.props.navigation.navigate('Review', {film: this.film});
    }

    onPressImageScreen() {
        this.props.navigation.navigate('FilmImages', {images: this.film.images.map((image, index) => ({
            URI: image,
            thumbnail: image,
            id: String(index),
        }))});
    }
    onPlay() {
        Animated.timing(
            this.state.thumbnailMarginTop, {
                toValue: 10,
                duration: 1000,
            }
        ).start();
    }

    onPause() {
        Animated.timing(
            this.state.thumbnailMarginTop, {
                toValue: -80,
                duration: 1000,
            }
        ).start();
    }

    render() {
        let srcLike = require('../../assert/like_icon_def.png')
        let srcLikeHov = require('../../assert/like_icon_hov.png')
        let srcFavorite = require('../../assert/favorites_icon_def.png')
        let srcFavoriteHov = require('../../assert/favorites_icon_hov.png')
        let srcComment = require('../../assert/comment_icon_def.png')
        let srcCommentHov = require('../../assert/comment_icon_hov.png')
        let srcImages = require('../../assert/image_icon_def.png')

        this.hovLike = this.props.likedFilms.likedFilms.find(f=>f._id === this.film._id)
        this.hovFavorite = this.props.favoriteFilms.favoriteFilms.find(f=>f._id === this.film._id)
        

        return (
            <Container>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <View style={styles.topBar}>
                    <Button transparent onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='ios-arrow-back' style={{color: '#fff'}} />
                    </Button>
                </View>
                <Content>
                    <Trailer onPlay={this.onPlay} onPause={this.onPause} image={this.film.banner} videoId={this.film.trailers.length > 0 ? this.film.trailers[0] : "q5u6v_W2ztA"} />
                    <View style={styles.basicInfoContainer}>
                        <FilmThumbnail style={{...styles.thumbnail, marginTop: this.state.thumbnailMarginTop}} src={this.film.poster}/>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{this.film.name}</Text>
                            <View style={{flexDirection: "row"}}>
                                <View style={{flex: 0, width: 100}}>
                                    <Text style={styles.subtitle}>2018</Text>
                                    <StarRating
                                        disabled={true}
                                        maxStars={5}
                                        rating={this.film.star}
                                        containerStyle={styles.starRating}
                                        starSize={15}
                                    />
                                </View>
                                <View style={{flex: 1}}>
                                    <Button style={styles.btnCinemaSession} onPress={()=>this.props.navigation.navigate('Showtimes', {sessions: this.film.cineplexs})}>
                                        <Text>Showtimes</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text>{this.film.description}</Text>
                    </View>
                    <View style={styles.actorContainer}>
                        <Text style={styles.actorTitle}>Actor</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {
                                this.film.actors.map(actor=>(
                                    <ActorThumbnail key={actor} src={actor} onPress={()=>{}} />
                                ))
                            }
                        </ScrollView>
                    </View>
                </Content>
                <View style={styles.bottomNav}>
                    <TouchableOpacity onPress={this.onPressLike}>
                        <Image
                            style={styles.bottomNavButton}
                            source={!!this.hovLike ? srcLikeHov : srcLike}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPressFavorite}>
                        <Image
                            style={styles.bottomNavButton}
                            source={!!this.hovFavorite ? srcFavoriteHov : srcFavorite}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPressComment}>
                        <Image
                            style={styles.bottomNavButton}
                            source={srcComment}
                        />
                    </TouchableOpacity>
                    {
                        this.film.images && this.film.images.length > 0 && (
                            <TouchableOpacity onPress={this.onPressImageScreen}>
                                <Image
                                    style={styles.bottomNavButton}
                                    source={srcImages}
                                />
                            </TouchableOpacity>
                        )
                    }
                </View>
            </Container>
        )
    }
}

var styles = StyleSheet.create({
    marginTop: {
        marginTop: 30
    },
    topBar: {
        top: StatusBar.currentHeight,
        flexDirection: "row",
        width: "100%",
        position: "absolute",
        zIndex: 2,
        elevation: 2,
    },
    thumbnail: {
        marginLeft: 10,
        zIndex: 3,
        elevation: 3,
    },
    bottomNav: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        position: "absolute",
        bottom: 5
    },
    basicInfoContainer: {
        flexDirection: "row",
    },
    titleContainer: {
        marginLeft: 20,
    },
    title: {
        fontWeight: "700",
        fontSize: 20
    },
    subtitle: {
        fontSize: 18,
    },
    actorContainer: {
        marginTop: 20,
        marginBottom: 90
    },
    actorTitle: {
        fontSize: 20,
        marginLeft: 8,
    },
    description: {
        fontSize: 15,
        margin: 8,
    },
    starRating: {
        marginVertical: 10,
        width: 20
    },
    btnCinemaSession: {
        backgroundColor: "#ff7200",
        marginTop: 10
    },
    bottomNavButton: {

    }
})

const mapStateToProps = (state) => ({
    topFilms: state.topFilmsData,
    genres: state.homeGenresData,
    likedFilms: state.likedFilmsData,
    favoriteFilms: state.favoriteFilmsData,
})

const mapDispatchToProps = dispatch => ({
    fetchTopFilms: ()=>dispatch(fetchTopFilms()),
    fetchHomeGenres: ()=>dispatch(fetchHomeGenres()),
    likeFilm: (film_id)=>dispatch(likeFilm(film_id)),
    unlikeFilm: (film_id)=>dispatch(unlikeFilm(film_id)),
    fetchLikedFilms: ()=>dispatch(fetchLikedFilms()),
    favoriteFilm: (film_id)=>dispatch(favoriteFilm(film_id)),
    unfavoriteFilm: (film_id)=>dispatch(unfavoriteFilm(film_id)),
    fetchFavoriteFilms: ()=>dispatch(fetchFavoriteFilms()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetailScreen)
