import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Container, Form, Input, Item, Button, Label } from "native-base";
import * as firebase from "firebase";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: null,
    firstName: "",
    lastName: "",
    workId: "",
  };

  // when a user signs up they will have a record added to the user table in realtime database
  addUser = (uid, firstName, lastName, email) => {
    firebase
      .database()
      .ref("UsersList/" + uid + "/info/")
      .set({
        firstName,
        lastName,
        email,
      })
      .then((data) => {})
      .catch((error) => {});
  };

  //CHECKS EMAIL AGAINST ALLOWED USERS, CREATES NEW USER, ADDS USERS INFO TO FIREBASE, CHECKS FOR ERRORS
  handleSignUp = (email, password) => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => firebase.auth().currentUser.sendEmailVerification())
            .then((user) => {
              this.addUser(
                firebase.auth().currentUser.uid,
                this.state.firstName,
                this.state.lastName,
                this.state.email
              );
            })
            .catch((error) => this.setState({ errorMessage: error.message }));

  };



  goBack = () => {
    this.props.navigation.navigate("StartScreen");
  };

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          {/* DISPLAYS ERROR IF EXISTS */}
          {this.state.errorMessage && (
            <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
          )}

{/* INPUTS */}
          <Item floatingLabel>
            <Label>First Name</Label>
            <Input
              autoCorrect={false}
              onChangeText={(firstName) => this.setState({ firstName })}
            />
          </Item>

          <Item floatingLabel>
            <Label>Last Name</Label>
            <Input
              secureTextEntry={false}
              autoCorrect={false}
              onChangeText={(lastName) => this.setState({ lastName })}
            />
          </Item>
     

          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>

          <Button
            style={{ margin: 10, marginTop: 40 }}
            full
            rounded
            success
            onPress={() =>
              this.handleSignUp(this.state.email, this.state.password)
            }
          >
            <Text style={{ color: "white" }}>Register</Text>
          </Button>

          <Button
            style={{ margin: 10 }}
            full
            rounded
            primary
            onPress={this.goBack}
          >
            <Text style={{ color: "white" }}>Go Back</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 40,
  },
});
