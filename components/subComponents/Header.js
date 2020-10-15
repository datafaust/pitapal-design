import React, {Component} from 'react';
import {Text,View, StyleSheet, TouchableOpacity} from 'react-native';
//import { SimpleLineIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import Cart from '../Cart'




class PageTemplate extends Component {

    getBag =() => {
        console.log('go to cart...')
        this.props.navigation.navigate('Cart')
    }

    render() {
        return (
            <React.Fragment>

                {/**HEADER */}
                {/**TITLE */}
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                </View>

                {/**BAG TOTAL*/}
                
                <TouchableOpacity 
                    style={styles.bag}
                    //onPress={this.getBag}
                >
                    <FontAwesome name="shopping-bag" size={22} color="white" />
                    <View style = {styles.total}>
                        <Text style={styles.totalText}>$0.00</Text>
                    </View>
                </TouchableOpacity>
            </React.Fragment>
    
         
        );
    }
}

export default PageTemplate;

const styles = StyleSheet.create({
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
    }
  });
  