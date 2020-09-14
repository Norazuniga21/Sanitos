import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, TextInput } from 'react-native'

import * as firebase from 'firebase'

//VISTA PERFIL USUARIO

export default class ProfileScreen extends React.Component {
  state = {
    email: "",
    displayName: ""
  }

  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;

    this.setState({ email, displayName });
  }

  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <View style={styles.container}>

        <Text style={{ position: 'absolute', left: 30, top: 80, color: '#414959', fontSize: 16, textTransform: 'uppercase' }}>
          Mi perfil</Text>
        <TextInput
          style={styles.input}
        >Hola {this.state.email}! </TextInput>

        <TouchableOpacity
          style={styles.button2}
          onPress={this.signOutUser}
        >
          <Text style={{ color: '#414959', fontSize: 13 }}>
            Editar
                      </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={this.signOutUser}
        >
          <Text style={{ color: '#414959', fontSize: 13 }}>
            Salir
                      </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {

    top: 142,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    height: 40,
    fontSize: 15,
    color: '#161F3D',
    padding: 10,
  },
  button: {

    top: 500,
    backgroundColor: '#E9446A',
    borderRadius: 4,
    height: 52,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button2: {

    top: 442,
    backgroundColor: '#E9446A',
    borderRadius: 4,
    height: 52,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
});