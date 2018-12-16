import React, { Component } from 'react'
import { connect } from "react-redux";
import { FlatList, View, Alert, StyleSheet, StatusBar, AsyncStorage } from 'react-native'
import {Button, Icon, Container, Content, H1, H2, H3, Item, Input, Fab} from 'native-base'
import Swipeout from 'react-native-swipeout';
import DialogInput from 'react-native-dialog-input';
import FilmThumbnail from '../../components/FilmThumbnail'
import GroupComment from '../../components/GroupComment'
import {fetchReviews, createReview, deleteReview, updateReview} from './actions/review_film'

class Review extends Component {
    state = {
        showDialogUdate: false,
        updatingReview: {},
        userData: {},
    }

    constructor(props) {
        super(props)

        this.film = props.navigation.getParam('film')

        this.props.fetchReviews(this.film._id)
    }

    componentDidMount(){
        AsyncStorage.getItem('userData')
        .then(userData=>this.setState({userData: JSON.parse(userData)}))
        .catch(err=>{})
    }

    _showCreateReviewScreen = () => {
        this.props.navigation.navigate('CreateReview', {film: this.film});
    }

    editReview = (review) => {
        this.setState({
            showDialogUdate: true,
            updatingReview: review,
        })
    }
    submitEditReview = (inputText) => {
        this.props.updateReview(this.state.updatingReview._id, inputText)
        this.setState({showDialogUdate: false})
    }

    deleteReview = (review) => {
        Alert.alert(
            'Confirm',
            'Delete?',
            [
                {text: 'Cancel', style: 'cancel'},
                {text: 'OK', onPress: () => this.props.deleteReview(review._id)},
            ],
            { cancelable: false }
        )
    }

    renderReviewItem = (review) => {
        if (this.state.userData._id !== review.user._id) {
            return (<GroupComment review={review}/>);
        }

        let swipeoutBtns = [
            {
                text: 'Edit',
                color: '#000',
                backgroundColor: '#F5F8FA',
                onPress: () => this.editReview(review)
            },
            {
                text: 'Delete',
                color: '#000',
                backgroundColor: '#F5F8FA',
                onPress: () => this.deleteReview(review)
            }
        ];

        return (
            <Swipeout right={swipeoutBtns} backgroundColor="transparent">
                <GroupComment review={review}/>
            </Swipeout>
        )
    }

    render() {
        return (
            <Container>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <View style={styles.topBar}>
                    <Button transparent onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='ios-arrow-back' style={{color: '#000'}} />
                    </Button>
                </View>
                <Content>
                    <FilmThumbnail style={styles.thumbnail} src={this.film.poster}/>
                    <View style={styles.marginTop}></View>
                    <View style={styles.reviewContainer}>
                        <View style={styles.titleContainer}>
                            <H1>Reviews</H1>
                            <H3> ({this.props.reviewData.reviews.length})</H3>
                        </View>
                        <FlatList
                            data={this.props.reviewData.reviews}
                            keyExtractor={(item, index)=>item._id}
                            extraData={this.props}
                            renderItem={({item})=>this.renderReviewItem(item)}
                        />
                    </View>
                </Content>
                <Fab position="bottomRight" onPress={this._showCreateReviewScreen}>
                    <Icon name="create" />
                </Fab>
                <DialogInput
                    isDialogVisible={this.state.showDialogUdate}
                    title={"Edit review"}
                    submitInput={(inputText) => this.submitEditReview(inputText)}
                    closeDialog={() => this.setState({showDialogUdate: false})}
                />
            </Container>
        )
    }
}

var styles = StyleSheet.create({
    marginTop: {
        height: StatusBar.currentHeight + 36 + 60,
        backgroundColor: "#F8F8F8",
    },
    topBar: {
        top: StatusBar.currentHeight,
        flexDirection: "row",
        width: "100%",
        position: "absolute",
        zIndex: 2,
        elevation: 2,
    },
    thumbnailContainer: {
        width: "100%",
        height: 120*17/12 + 10,
        marginTop: 10,
    },
    thumbnail: {
        position: "absolute",
        top: 40,
        right: 10,
        width: 120,
        zIndex: 3,
        elevation: 3,
    },
    reviewContainer: {
        backgroundColor: "#fff",
        padding: 30,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "baseline",
        marginBottom: 50
    },
})

const mapStateToProps = (state) => ({
    reviewData: state.reviewData,
})

const mapDispatchToProps = dispatch => ({
    fetchReviews: (film_id)=>dispatch(fetchReviews(film_id)),
    createReview: (review, owner, onModel = "Film") => dispatch(createReview(review, owner, onModel)),
    deleteReview: (review_id) => dispatch(deleteReview(review_id)),
    updateReview: (review_id, new_review) => dispatch(updateReview(review_id, new_review)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Review)