import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Animated,
  ScrollView
} from "react-native";
import * as firebase from "firebase";
import { SearchBar } from 'react-native-elements';
import Card from './subComponents/card';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import PageTemplate from './subComponents/Header';  



const moment = require("moment");

class Home extends Component {
  uid = firebase.auth().currentUser.uid;

  state = {
    submitted: false,
    preSubmitted: false,
    proximity: null,
    hasLocationPermission: null,
    proximityMax: 200,
    siteLocation: { latitude: null, longitude: null },
    submittedAnimation: false,
    animatedValue: new Animated.Value(70),
    mockItems: [
      {
        meal:'Chicken Bryani',
        restaurant: 'Adels Halal',
        address: '33 Beaver Street 10004',
        status: 'open',
        distance: .5,
        rating: 4.6
      },
  
      {
        restaurant: 'Albaiks Emporium',
        address: '27 John Street 10005',
        status: 'open',
        distance: .7,
        rating: 3.9
      },
      {
        restaurant: 'Salims Halal',
        address: '27 John Street 10005',
        status: 'open',
        distnace: 1.1,
        rating: 4.9
      },
      {
        restaurant: 'Masouds Place',
        address: '27 John Street 10005',
        status: 'closed',
        distance: 1.4,
        rating: 4.7
      },
      {
        restaurant: 'Abdullahs Chow',
        address: '27 John Street 10005',
        status: 'open',
        distance: 1.9,
        rating: 3.7
      }
  ]
  };

  componentDidMount() {
    //CHECK IS USER IS VERIFIED
    if (firebase.auth().currentUser.emailVerified == false) {
      Alert.alert(
        "ALERT!",
        "Please verify your email first.",
        [{ text: "OK" }],
        { cancelable: false }
      );
      this.logout();
    }

  }
  
  //search
  updateSearch = () => {
    console.log('searching...')
  }



  render() {

    let cards = null;
        if(this.state.mockItems) {
            cards = (
                <View>
                    {
                        this.state.mockItems.map( (card, i) => {
                            return <View style={styles.card} key={i}>

                            <Card key={i}
                              image={require("../assets/chicken.jpeg")}
                              restaurant={card.restaurant}
                              address={card.address}
                              status={card.status}
                              distance={`${card.distance} miles`}
                              rating={card.rating}
                            />
                        </View>
                        })
                    }
                </View>
            )
        }





    return (
      <React.Fragment>

        {/**HEADER */}
        {/**TITLE */}
        <View style={styles.container}>

            <Text style={styles.title}>
                {'Halal Trucks'}
            </Text>
        </View>

         {/**FAVORITES */}
         <TouchableOpacity
            style={styles.favorites}
            onPress={()=>this.props.navigation.navigate('Map')}
         >
             <FontAwesome name="map" size={22} color="white" />
        </TouchableOpacity>

        {/**BAG TOTAL*/}
                
        <TouchableOpacity 
          style={styles.bag}
          onPress={()=>this.props.navigation.navigate('Cart')}
        >
          <FontAwesome name="shopping-bag" size={22} color="white" />
          <View style = {styles.total}>
            <Text style={styles.totalText}>$0.00</Text>
          </View>
        </TouchableOpacity>

        {/**SEARCH */}
        <View style={styles.searchContainer}> 
          <View style={styles.search}>
            <SearchBar
              placeholder="Type Here..."
              onChangeText={this.updateSearch}
              value={''}
            />
          </View>

        {/**BUTTONS */}
        <View style ={styles.buttonContainer}>
          {/**BUTTON TO REFRESH */}
            <TouchableOpacity style={styles.button}>
                <MaterialIcons name="my-location" size={24} color="black" />
                <Text style={{alignItems:'center'}}>Closest</Text>
            </TouchableOpacity>

          {/**BUTTON TO FILTER */}
          <TouchableOpacity style={styles.button}>
              <FontAwesome name="filter" size={24} color="black" />
                <Text style={{alignItems:'center'}}>Refine</Text>
            </TouchableOpacity>
        </View>
        </View>

        {/**RESTAURANTS */}
        <ScrollView>
          {cards}
        </ScrollView>
      </React.Fragment>
    );
  }
}


export default Home;


const styles = StyleSheet.create({
  card: {
    padding:5,
    alignItems:'center'
  },
  buttonContainer: {
    //marginLeft: 50,
    flexDirection:'row',
    alignItems: 'center',
    marginLeft:5,
  },
  button:{
    alignItems:'center',
    padding:10
  },
  search:{
    width:"60%"
  },
  searchContainer: {
    flexDirection:'row',
  },

  //HEADER PIECE -TEMP
  container:{
    backgroundColor: '#a83244',
    alignSelf: 'stretch',
    width: '100%',
    height:'12%',
    justifyContent: 'flex-end'
},
title:{
    fontFamily:'Verdana',
              fontSize:22,
              //position: 'absolute',
              marginTop: '7%',
              //marginLeft: '3%',
              textAlign: 'center',
              color: 'white',
              paddingBottom:10
},
bag:{
    position:'absolute',
    marginTop: '7%',
    marginRight: '9%',
    right: 14,
    display: 'flex',
    flexDirection: 'row',
    flex:1,
    alignItems:'center'
},
total:{
    position:'absolute',
    marginTop: '10%',
    marginLeft: 30
    //left:27
},
totalText:{
    fontFamily:'Verdana',
    fontSize:18,
    color: '#FFFFFF'
},
favorites: {
  position: 'absolute',
  marginTop: '11%',
  marginLeft: 30
}
});
