
import React, { Component } from "react";
import { StyleSheet, Text, View,
   TouchableOpacity, ActivityIndicator, ScrollView, Alert} from 'react-native';
import * as firebase from 'firebase';

import PageTemplate from './subComponents/Header'
import { Entypo } from '@expo/vector-icons'; 
import Favorites from "./Favorites";
 

class Orders extends Component {

  uid = firebase.auth().currentUser.uid;
  state = {
    foodItems:[{quantity: 1,item:'chicken lamb combo', price: '6.00'},{quantity: 1,item:'soda', price: '1.00'}]
  }

  componentDidMount() {
    //this.readUserData()
  }


    render(){



        return (
          
            <React.Fragment>
             
              <PageTemplate 
                title={`My Orders`}
              />

               {/** BUTTONS TO NAVIGATE */}
              <View
                style ={styles.nav}
              >
                <TouchableOpacity
                  style={styles.navButton}
                >
                  <Text style={styles.navText}>2-Touch Orders</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.navButton}
                >
                  <Text style={styles.navText}>Pending Orders</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.navButton}
                >
                  <Text style={styles.navText}>Past Orders</Text>
                </TouchableOpacity>
              </View>

              {/**FAVORITE ORDERS */}
              {<Favorites />}

                
            </React.Fragment>
          );
    }
}




export default Orders;


const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  navButton: { 
      flexDirection:'row',
      //height:'100%',
      width:'31%',
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
  navText: {
    fontFamily: 'Verdana',
    color: 'blue',
    fontSize: 14
  }
});