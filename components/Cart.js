
import React, { Component } from "react";
import { StyleSheet, Text, View,
   TouchableOpacity, ActivityIndicator, ScrollView, Alert} from 'react-native';
import * as firebase from 'firebase';

import PageTemplate from './subComponents/Header'
import { Entypo } from '@expo/vector-icons'; 
 

class Cart extends Component {

  uid = firebase.auth().currentUser.uid;
  state = {
    foodItems:[{quantity: 1,item:'chicken lamb combo', price: '6.00'},{quantity: 1,item:'soda', price: '1.00'}]
  }

  componentDidMount() {
    //this.readUserData()
  }

  goBack =() =>{
      this.props.navigation.navigate('Home')
  }

    render(){

      let items = null;
      if(this.state.foodItems) {
          items = (
              <View>
                  {
                      this.state.foodItems.map( (item, i) => {
                          return <View style={styles.item} key={i}>
                          
                          {/**ITEM AND QUANTITY */}
                          <View style = {styles.itemAndQuant}>
                            <Text
                              style={styles.orderText}
                            >
                              {item.quantity}
                            </Text>
                            <Text>{"   "}</Text>
                            <Text 
                              style={styles.orderText}
                              key={i}
                            >
                            {item.item}
                            </Text>
                          </View>
                          
                          {/**ITEM PRICE */}
                          <Text
                            style={styles.orderText}
                          >
                          {`$${item.price}`}
                          </Text>

                      </View >
                     
                     
                      })
                  }
              </View>
          )
      }


        return (
          
            <React.Fragment>
              <PageTemplate title = {'Your Order'} />
              
              {/**FOOD TRUCK TITLE */}
              <Text style ={styles.restaurant}>Adels Halal</Text>
              
              {/**OPTIONS TO ALTER ORDER */}
              <TouchableOpacity style ={styles.addItems}>
                  <Entypo name="plus" size={24} color="blue" />
                  <Text style={styles.addItemsText}>Add More Items</Text>
              </TouchableOpacity>

              {/**LIST OF ITEMS IN BAG */}
              {items}

              {/**ITEMIZED STUFF */}
              <View style={styles.itemized}>
                <Text style={styles.orderText}>Order Subtotal</Text>
                <Text style={styles.orderText}>$7.00</Text>
              </View>

              <View style={styles.itemized}>
                <Text style={styles.feesText}>Ordering Fee</Text>
                <Text style={styles.feesText}>$0.50</Text>
              </View>

              <View style={styles.itemized}>
                <Text style={styles.feesText}>Sales Tax</Text>
                <Text style={styles.feesText}>{`$${(7.50 * .0825).toFixed(2)}`}</Text>
              </View>

              <View style={styles.itemized}>
                <Text style={styles.orderText}>Total</Text>
                <Text style={styles.orderText}>{`$${(7.50 * 1.0825).toFixed(2)}`}</Text>
              </View>

              {/**BUTTON TO CONTINUE TO CHECKOUT */}
              <View style={styles.checkoutContainer}>
                <TouchableOpacity style={styles.continueCheckout}>
                  <Text
                    style={{color:'white', fontFamily: 'Verdana', fontSize: 16, fontWeight:'bold'}}
                  >{`Go to Checkout: $${(7.50 * 1.0825).toFixed(2)}`}</Text>
                </TouchableOpacity>
              </View>


                
            </React.Fragment>
          );
    }
}




export default Cart;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:40
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
  orderText:{
    fontFamily:'Verdana',
    fontSize: 15
  },
  feesText: {
    fontFamily: 'Verdana',
    fontSize: 13,
    color: 'grey'
  },
  restaurant: {
    fontFamily: 'Verdana',
    fontSize: 17,
    fontWeight: 'bold',
    padding:5,
    marginLeft:10
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