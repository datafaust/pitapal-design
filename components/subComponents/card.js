import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";

const Card = (props) => {

      return (
        <TouchableOpacity style={styles.container}>
                <Image
                    source={props.image}
                    style={styles.image}
                />
                <View style={{padding:10}}>
                    <Text style={styles.title}>{props.restaurant}</Text>
                    <Text style={styles.subtitle}>{props.address}</Text>
                    <Text style={styles.subtitle}>{props.distance}</Text>
                </View>
                <View style={styles.statusSection}>
                    <Text style ={styles.subtitle}>{props.rating}</Text>
                    <Text style={[props.status==='closed' ? styles.statusClosed : styles.statusOpen]}>{props.status}</Text>
                </View>
                    
        </TouchableOpacity>
      )
}
  
  
  
  export default Card;



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
    }
    


    })
  
  
  
  
  
  
  
  