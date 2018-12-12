import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, AsyncStorage } from 'react-native'
import { Container, Content, Item, Button, Text, Icon, H1, Textarea } from 'native-base'
import { connect } from "react-redux";
import {createReview, updateReview} from '../Review/actions/review_film'
import StarRating from 'react-native-star-rating';

class CreateReview extends Component {
    state = {
        review: "",
        rating: 5
    }

    review = null;//null: add

    constructor(props) {
        super(props)

        this.film = props.navigation.getParam('film')
    }

    componentDidMount(){
        // find exist user's review
        AsyncStorage.getItem('userData')
        .then(userData=>{
            userData = JSON.parse(userData)
            let findReview = this.props.reviewData.reviews.find(r => r.user._id === userData._id)
            
            if(findReview){
                this.setState({
                    review: findReview.body,
                    rating: findReview.star
                })
                this.review = findReview
            }
        })
        .catch(err=>{})
    }

    onStarRatingPress = (rating) => {
        this.setState({rating})
    }

    onPressReview = () => {
        if (this.review === null) {
            this.props.createReview(this.state.review, this.state.rating, this.film._id, "Film")
        } else {
            this.props.updateReview(this.review._id, this.state.review, this.state.rating)
        }

        this.props.navigation.goBack();
    }

    render() {
        return (
            <Container style={styles.container}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <View style={styles.topBar}>
                    <Button transparent onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='ios-arrow-back' style={{color: '#000'}} />
                    </Button>
                </View>
                <H1>Your review</H1>
                <Textarea
                    rowSpan={5}
                    bordered
                    placeholder="Your review"
                    style={{width: "100%"}}
                    value={this.state.review}
                    onChangeText={review=>this.setState({review})}
                />
                <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={this.state.rating}
                    selectedStar={this.onStarRatingPress}
                    containerStyle={styles.starRating}
                />
                <Button style={styles.btnSave} onPress={this.onPressReview}>
                    <Text>Save</Text>
                </Button>
            </Container>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    topBar: {
        top: StatusBar.currentHeight,
        flexDirection: "row",
        width: "100%",
        position: "absolute",
        zIndex: 2,
        elevation: 2,
    },
    starRating: {
        marginVertical: 10
    },
    btnSave: {
        alignSelf: "center"
    }
})

const mapStateToProps = (state) => ({
    reviewData: state.reviewData,
})

const mapDispatchToProps = dispatch => ({
    createReview: (review, rating, owner, onModel = "Film") => dispatch(createReview(review, rating, owner, onModel)),
    updateReview: (review_id, new_review, new_rating) => dispatch(updateReview(review_id, new_review, new_rating)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview)