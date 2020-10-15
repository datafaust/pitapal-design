import React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export default class Map extends React.Component {

  state = {
    region: {
        latitude: 40.7128,
        longitude: -74.0060,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    markers: [
        {
            title:'Beaver',
            latlng: {latitude: 40.705030,longitude: -74.011551},
            description:'testing'
        },
        {
            title:'Battery Park',
            latlng: {latitude: 40.7040,longitude: -74.0137},
            description:'testing'
        },
        {
            title:'test3',
            latlng: {latitude: 40.7118,longitude: -74.0131},
            description:'testing'
        }
    ]
    
  }


  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} region={this.state.region}>
            {this.state.markers.map((marker, index) => (
                <Marker
                key={index}
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
                />
             ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})