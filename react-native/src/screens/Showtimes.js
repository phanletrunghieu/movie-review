import React, { Component } from 'react'
import { View, StatusBar, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { Button, Text, Icon, Container, Content, Tab, Tabs, ScrollableTab, TabHeading, List, ListItem, Fab } from 'native-base'
import { showLocation } from 'react-native-map-link'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const screenHeight = Dimensions.get("window").height
const screenWidth = Dimensions.get("window").width

export default class Showtimes extends Component {
    state = {
        selectedCineplex: 0,
        selectedCinema: 0
    }

    constructor(props){
        super(props)

        this.sessions = props.navigation.getParam('sessions')
    }

    showMap = (cinema) => {
        showLocation({
            latitude: cinema.location.coordinates[1],
            longitude: cinema.location.coordinates[0],
            sourceLatitude: cinema.location.coordinates[1],
            sourceLongitude: cinema.location.coordinates[0],
            title: cinema.name
        })
    }
    
    render() {
        return (
            <Container>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <View style={styles.topBar}>
                    <Button transparent onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='ios-arrow-back' style={{color: '#000'}} />
                    </Button>
                    <Text style={styles.title}>Showtimes</Text>
                </View>
                <View style={{flex:1}}>
                    <Content>
                        <Tabs
                            tabContainerStyle={{elevation:0}}
                            renderTabBar={()=><ScrollableTab style={{backgroundColor: "transparent", marginTop: 20}} />}
                            initialPage={this.state.selectedCineplex}
                            onChangeTab={({i})=>this.setState({selectedCineplex: i})}
                        >
                            {
                                this.sessions.map(cineplex=>(
                                    <Tab
                                        key={cineplex._id}
                                        textStyle={styles.tabHeadTextStyle}
                                        activeTextStyle={styles.tabHeadTextStyleActive}
                                        tabStyle={styles.tabHeading}
                                        activeTabStyle={styles.tabHeading}
                                        style={styles.tabPage}
                                        heading={cineplex.name}
                                    >
                                        <Tabs
                                            tabContainerStyle={{elevation:0}}
                                            renderTabBar={()=><ScrollableTab style={{backgroundColor: "transparent", marginTop: 20}} />}
                                            initialPage={this.state.selectedCinema}
                                            onChangeTab={({i})=>this.setState({selectedCinema: i})}
                                        >
                                            {
                                                cineplex.cinemas.map(cinema=>(
                                                    <Tab
                                                        key={cinema._id}
                                                        textStyle={styles.tabHeadTextStyle}
                                                        activeTextStyle={styles.tabHeadTextStyleActive}
                                                        tabStyle={styles.tabHeading}
                                                        activeTabStyle={styles.tabHeading}
                                                        style={styles.tabPage}
                                                        heading={cinema.name}
                                                    >
                                                        <ScrollView style={{flex: 1}}>
                                                            <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                                                            {
                                                                cinema.sessions.map(session => {
                                                                    let date = new Date(session.date)
                                                                    return (
                                                                        <Text key={session._id} style={styles.sessionTime}>{date.getHours() + ":" + date.getMinutes()}</Text>
                                                                    )
                                                                })
                                                            }
                                                            </View>
                                                        </ScrollView>
                                                        <MapView
                                                            initialRegion={{
                                                                latitude: cinema.location.coordinates[1],
                                                                longitude: cinema.location.coordinates[0],
                                                                latitudeDelta: 0.0922,
                                                                longitudeDelta: 0.0421,
                                                            }}
                                                            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                                                            style={{flex: 1}}
                                                            showsUserLocation={true}
                                                        >
                                                            <Marker
                                                                coordinate={{
                                                                    latitude: cinema.location.coordinates[1],
                                                                    longitude: cinema.location.coordinates[0],
                                                                }}
                                                                title={cinema.name}
                                                                description={cinema.address}
                                                            />
                                                        </MapView>
                                                    </Tab>
                                                ))
                                            }
                                        </Tabs>
                                    </Tab>
                                ))
                            }
                        </Tabs>
                    </Content>
                    <Fab
                        direction="up"
                        containerStyle={{ }}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                        onPress={() => {
                            console.error(this.state.selectedCineplex, this.state.selectedCinema);
                            
                            this.showMap(this.sessions[this.state.selectedCineplex].cinemas[this.state.selectedCinema])
                        }}
                    >
                            <Icon name="md-navigate" />
                    </Fab>
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
        zIndex: 2,
        elevation: 2,
    },
    title: {
        marginTop: 8,
        fontSize: 20,
    },
    tabHeading: {
        backgroundColor: "#fff",
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
        backgroundColor: "#fff",
        height: screenHeight - 80
    },
    sessionTime: {
        borderColor: "#ff7200",
        borderWidth: 2,
        padding: 10,
        margin: 10,
    },
})