
import React, { Component } from "react";
import { StyleSheet, Text, View,
   TouchableOpacity, ActivityIndicator, ScrollView, Alert, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';

import PageTemplate from './subComponents/Header'
 

class Profile extends Component {

  uid = firebase.auth().currentUser.uid;
  state = {
    firstName:'',
    lastName:'',
    modalVisible: false,
    total: null,
    totalWeek: null,
    showHistory: false,
    data:null
  }

  componentDidMount() {
    //this.readUserData()
  }


  handleSignout = () => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
    this.props.navigation.navigate('StartScreen')
  }



    render(){
        this.uid && console.log(this.uid)

        return (
          
          <View style={{flex:1}}>
          {/** </View>{this.props.reducer.data ? */}
          {/* {this.props.reducer.data ?
          //show profile */}

          <React.Fragment>
           
         
          <PageTemplate title={'My Account'} />
           
           {/*<Image source={pic} />*/}
           {/**  Frst Section */}
 
           <View style={{ 
                   //backgroundColor:'blue'
                   }}>
                   <Text style={styles.section}>Account Information</Text>
                   
           </View>

           {/** ACCOUNT INFORMATION NAME, PHONE ETC SLOT */}
           
           {'test data' ? <TouchableOpacity
                         onPress={()=>{navigate('EditAccount')}}
                         style={{position: 'absolute',
                         marginTop:'33%',
                         flex:1,
                         flexDirection: 'row',
                         flexWrap: 'wrap'}}>
               <View style={{paddingTop:50,
                              padding:15
                           }}
                >
                <Text style ={styles.accText}>{`sample text`}</Text>
                <Text style ={styles.accText}>{`sample text`}</Text>
                <Text style ={styles.accText}>{`sample text`}</Text>
               </View>
           </TouchableOpacity> :  <View style={{marginTop:'5%',alignItems:'center'}}><Text>loading</Text><ActivityIndicator size="large" color="#0000ff" /></View>}
           
           {/**add line section */}
           
           <View style={{
                     //backgroundColor:'yellow', 
                     marginTop:'33%'
                     }}>
                   <Text style={styles.section}>Settings</Text>
          </View>
          <ScrollView>
             
            
             <TouchableOpacity onPress={()=>this.handleSignout()}>
               <Text>SIGN OUT</Text>
             </TouchableOpacity>
      
               
             
          </ScrollView>
         </React.Fragment>
        </View>
          );
    }
}




export default Profile;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:40
  },
  item: {
    padding: 15,
    alignSelf: 'stretch',
    borderWidth: 1,
    backgroundColor: '#a7a6ba'
 }
});