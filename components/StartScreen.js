import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Container, Form, Button } from "native-base";
import * as firebase from "firebase";
import * as Animatable from "react-native-animatable";
import { Audio } from 'expo-av';

class Help extends Component {
  async componentDidMount() {
    //CHECKS IF THE USER ALREADY EXISTS (IF YES, CHECKS IF EMAIL IS VERIFIES (IF YES, FORWARDS
    //TO HOME, IF NOT, KEEPS AT THIS SCREEN))
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate(
          user.emailVerified == true ? "Home" : "StartScreen"
        );
      }
    });


    //get audio permissions and play music
    const { status } = await Audio.requestPermissionsAsync();

    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access Audio was denied',
      });
      } else {
        this.setState({ hasAudoPermission : status })
    }

    //PLAY SOUND FUNCTION
    const playbackObject = await Audio.Sound.createAsync(
    require('../assets/sounds/azanTrimmed.mp3'),
    { shouldPlay: true }
   );

    //playbackObject.playAsync();

  }

  

  //MOVE TO LOGIN
  handleLogin = () => {
    this.props.navigation.navigate("Login");
  };

  //MOVE TO REGISTER
  handleSignUp = () => {
    this.props.navigation.navigate("SignUp");
  };

  render() {
    return (
      <Container>
        {/* ANIMATING LOGO */}
        <Animatable.View animation="bounceInLeft" style={styles.container1}>
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 230, height: 220 }}
          />

          <Text style={{ fontSize: 50, fontWeight: "bold" }}>PitaPal</Text>
        </Animatable.View>
        {/* BUTTONS  */}
        <View style={styles.container}>
          <Form>
            <Button
              style={{ margin: 10 }}
              full
              rounded
              success
              onPress={this.handleLogin}
            >
              <Text style={{ color: "white" }}>Login</Text>
            </Button>

            <Button
              style={{ margin: 10 }}
              full
              rounded
              primary
              onPress={this.handleSignUp}
            >
              <Text style={{ color: "white" }}>Registration</Text>
            </Button>
          </Form>
        </View>

        {/* ANIMATED COMPANY LOGO */}
        <View style={styles.container3}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>by</Text>
          <Animatable.Image
            animation="bounceInUp"
            style={styles.tinyLogo}
            source={require("../assets/companyLogo.png")}
          />
        </View>
      </Container>
    );
  }
}

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",

    paddingTop: 10,

    paddingRight: 40,
    paddingLeft: 40,
    marginTop: 40,
  },
  container1: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  container3: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  tinyLogo: {
    width: "40%",
    height: "22%",
  },
});
