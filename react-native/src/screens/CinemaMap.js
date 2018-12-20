import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default class CinemaMap extends Component {
    state = {
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        marker: {
            latlng: {
                latitude: 0,
                longitude: 0,
            }
        }
    }

    constructor(props){
        super(props)

        this.cinema = props.navigation.getParam('cinema')
    }

    componentDidMount(){
        let coordinates = this.cinema.location.coordinates
        if(!coordinates){
            return
        }

        if(coordinates.length !== 2){
            return
        }

        let region = this.state.region
        region.longitude = coordinates[0]
        region.latitude = coordinates[1]
        
        let marker = {
            latlng: {
                latitude: coordinates[1],
                longitude: coordinates[0],
            },
            title: this.cinema.name,
            description: this.cinema.address,
        }
        this.setState({marker, region})
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    initialRegion={this.state.region}
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    showsUserLocation={true}
                >
                    <Marker
                        coordinate={this.state.marker.latlng}
                        title={this.state.marker.title}
                        description={this.state.marker.description}
                    />
                </MapView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    map: {
        // ...StyleSheet.absoluteFillObject,
        flex: 1,
    },
});