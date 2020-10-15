import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ourReducer from './store/reducer';

import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Cart from './components/Cart'
import PageTemplate from './components/subComponents/Header'
import StartScreen from './components/StartScreen';
import Favorites from './components/Favorites';
import Orders from './components/Orders';
import { MaterialIcons } from '@expo/vector-icons'; 


import GenerateQR from './components/generateQR';
import Map from './components/Map';
import { firebase } from './src/firebase/config';



import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const store = createStore(ourReducer);

export default class App extends Component {

  render(){

    return (
      <Provider store={ store }>
        <AppContainer/>
      </Provider>
    );
  
  }

}


//HOME NAVIGATOR
//-can access cart
//-can access individual food trucks
const HomeNavigator = createStackNavigator({
  Home: { screen: Home,
    navigationOptions: {
     headerShown: false
 }
},
  Cart: { screen: Cart,
    navigationOptions: {
      headerShown: false
  } 
},
  Map: { screen: Map,
    navigationOptions: {
    headerShown: false
} 
}

})


//Order NAVIGATOR
//-user can see previous orders and do two touch orders
const OrderNavigator = createStackNavigator({
  Orders: { screen: Orders,
    navigationOptions: {
     headerShown: false
 }
}

})


 //Navigate profiles
 const ProfileNavigator = createStackNavigator({
  //  bottomTabNavigator: 
   Profile: { screen: Profile,
         navigationOptions: {
          headerShown: false
      }
  },
   QR: { screen: GenerateQR,
          navigationOptions: ({ navigation }) => {
      return {
        headerTitle: <Text style={{ fontSize: 35, color: 'white'}}>My QR Code</Text>,
        headerStyle:{backgroundColor:'black', height: 100},
        headerTintColor: '#ffffff',
        //headerLeft: (<HeaderBackButton onPress={_ => navigation.goBack()}/>)
      }
    } 
  }
 }

 );


const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {screen: HomeNavigator,navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        //<Ionicons  name="ios-home" size={25} color={tintColor}/>
          // <Icon name="qrcode" size={25} color={tintColor} />
          <MaterialCommunityIcons name="food" size={24} color="black" />
        )
      }
    },
    Orders: {screen: OrderNavigator, navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          // <Icon name="search" size={25} color={tintColor} />
          //<Ionicons  name="ios-search" size={25} color={tintColor}/>
          //<Ionicons name="ios-map" size={25} color="black" />
          <MaterialCommunityIcons name="clipboard-text-outline" size={24} color="black" />
        )
      }
    },
   
    Profile: {screen: ProfileNavigator,navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        // <Icon name="user" size={25} color={tintColor} />
        <Ionicons  name="ios-person" size={25} color={tintColor}/>
      )
    }}

  },
  {
    //initialRouteName: 'Profile',
    initialRouteName: 'Orders',
    tabBarOptions: {
      activeTintColor: '#eb6e3d'
    }
  }
);



const RootSwitch = createSwitchNavigator({ 
  StartScreen,
  SignUp,
  Login,
  bottomTabNavigator
});

const AppContainer = createAppContainer(RootSwitch);



//-------------------------------------------------