
import React, { Component } from "react";
import { StyleSheet, Text, View,
   TouchableOpacity, ActivityIndicator, ScrollView, Alert, Image} from 'react-native';
import * as firebase from 'firebase';

import PageTemplate from './subComponents/Header'
import { Entypo } from '@expo/vector-icons'; 
 

class Favorites extends Component {

  uid = firebase.auth().currentUser.uid;
  state = {
    favorites:[
      {
        restaurant:'Adels Halal',
        quantity: 1,
        item:'chicken lamb combo',
        price: '6.00',
        address: '33 Beaver Street 10004',
        status: 'open'

      },
      { restaurant:"Shah's Halal",
        quantity: 1,
        item:'Falafel',
        price: '5.00',
        address: '27 John Street 10005',
        status: 'open'
      }
    ]
  }

  componentDidMount() {
    //this.readUserData()
  }


    render(){

      let favorites = null;
      if(this.state.favorites) {
          favorites = (
              <View>
                  {
                      this.state.favorites.map( (favorite, i) => {
                          return <View style={styles.card} key={i}>
                          
                          <TouchableOpacity style={styles.container}>
                          
                            <View style={{padding:10}}>
                                <Text style={styles.title}>{favorite.restaurant}</Text>
                                <Text style={styles.subtitle}>{favorite.item}</Text>
                                <Text style={styles.subtitle}>{favorite.address}</Text>
                                <Text style={styles.subtitle}>{favorite.distance}</Text>
                            </View>
                            <View style={styles.statusSection}>
                                <Text style ={styles.subtitle}>{favorite.rating}</Text>
                                <Text style={[favorite.status==='closed' ? styles.statusClosed : styles.statusOpen]}>{favorite.status}</Text>
                            </View>
                          </TouchableOpacity>


                      </View>
                      })
                  }
              </View>
          )
      }


        return (
          
            <React.Fragment>
              {favorites}
            </React.Fragment>
          );
    }
}




export default Favorites;


const styles = StyleSheet.create({
      container: {
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 5},
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        flexDirection:"row",
        alignItems: 'center',
        backgroundColor: 'white',
        width: '95%'
    },
    title: {
        color: 'red',
        fontFamily: 'Verdana',
        width:'90%',
        fontSize:15
    },
    subtitle: {
        color: 'grey',
        fontFamily: 'Verdana',
        width:'90%'
    },
    statusOpen: {
        color: 'green'
    },
    statusClosed: {
        color: 'red'
    },
    image: {
        width: 110, height: 100 
    },
    statusSection: {
        marginLeft:5
    },
  item: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginLeft:5,
    width:'90%',
    padding: 15,
    alignSelf: 'stretch',
    //borderWidth: .3,
    //backgroundColor: '#a7a6ba'
  },
  itemAndQuant:{
    flexDirection:'row',
    //backgroundColor:'yellow',
    //justifyContent: 'space-between',
  },
  itemized:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    left:5,
    width:'90%'
  },
  addItems:{
    flexDirection:'row',
    height:'5%',
    width: '45%',
    alignItems:'center',
    justifyContent:'center',
    //marginLeft:30,
    //marginRight:30,
    backgroundColor:'#fff',
    borderRadius:5,
    borderWidth: 2,
    borderColor: 'blue',
    marginLeft:10 
  },
  addItemsText:{
    textAlign:'center',
    color: 'blue',
    fontWeight:'bold'
  },
 
  continueCheckout: {
    //flexDirection:'row',
    height:'25%',
    width: '90%',
    alignItems:'center',
    justifyContent:'center',
    //marginLeft:30,
    //marginRight:30,
    backgroundColor:'#a83244',
    borderRadius:5,
    borderWidth: 2,
    //borderColor: 'blue',
    //marginLeft:10 
  },
  checkoutContainer: {
    marginTop: 70,
    alignItems: 'center'
  }
});