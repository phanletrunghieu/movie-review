import React, { Component } from 'react'
import { View, FlatList, StatusBar, StyleSheet } from 'react-native'
import {Button, Icon, Container, Content, Input, Item, List, ListItem, Text} from 'native-base'
import { connect } from "react-redux";
import {search} from "./actions/search"

class SearchInput extends Component {
    state = {
        searchInput: ""
    }

    onChangeTextSearch = (searchInput) => {
        this.setState({searchInput})
        this.props.search(searchInput)
    }

    _showFilmDetail = (film) => {
        this.props.navigation.navigate('FilmDetail', {film});
      };

    render() {
        return (
            <Container>
                <StatusBar backgroundColor="#fff" translucent={true} />
                <View style={styles.topBar}>
                    <Button transparent onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='ios-arrow-back' style={{color: '#ff7b00'}} />
                    </Button>
                    <Item regular style={{flex: 1}}>
                        <Input
                            placeholder='Search...'
                            value={this.state.searchInput}
                            onChangeText={this.onChangeTextSearch}
                            onSubmitEditing={console.log}
                        />
                    </Item>
                </View>
                <Content>
                <View style={styles.marginTop}></View>
                    <List>
                        {
                            this.props.searchData.results.map((result, index)=>(
                                <ListItem key={index} onPress={()=>this._showFilmDetail(result)}>
                                    <Text>{result.name}</Text>
                                </ListItem>
                            ))
                        }
                    </List>
                </Content>
            </Container>
        )
    }
}

var styles = StyleSheet.create({
    marginTop: {
        marginTop: 80
    },
    topBar: {
        top: StatusBar.currentHeight,
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#fff",
        position: "absolute",
        paddingRight: 5,
        zIndex: 2,
        elevation: 2,
    },
})

const mapStateToProps = (state) => ({
    searchData: state.searchData
})

const mapDispatchToProps = dispatch => ({
    search: (keyword)=>dispatch(search(keyword))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
