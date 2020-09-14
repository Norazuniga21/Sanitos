import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import * as firebase from 'firebase'

//VISTA HOME PRINCIPAL
export default class EstaturaScreen extends React.Component {

  state = {
    email: "",
    displayName: ""
  }

  state = {
    nino: ""
  }

  state = {
    sexo: ""
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

        <TouchableOpacity
          style={styles.back}
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text
            style={{ display: 'flex', alignItems: 'flex-start', textAlign: 'left' }}
          >Información</Text>
        </TouchableOpacity>
        <Image
          source={require('../recursos/imagenes/logoSanitos.png')}
          style={{ width: 250, height: 190, margin: 'auto' }}
        />

        <Text
          style={{ display: 'flex', alignItems: 'flex-start', textAlign: 'left' }}
        >{this.state.nino}</Text>

        <Text
          style={{ display: 'flex', alignItems: 'flex-start', textAlign: 'left' }}
        >{this.state.sexo}</Text>

        <TouchableOpacity
          style={styles.back}
          onPress={() => this.props.navigation.navigate('Peso')}
        >
          <Text
            style={{ display: 'flex', alignItems: 'flex-start', textAlign: 'left' }}
          >Peso</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.back}
          onPress={() => this.props.navigation.navigate('Estatura')}
        >
          <Text
            style={{ display: 'flex', alignItems: 'flex-start', textAlign: 'left' }}
          >Estatura</Text>
        </TouchableOpacity>

        <Text
          style={{ display: 'flex', alignItems: 'flex-start', textAlign: 'left' }}
        >Estadistica</Text>

        <TouchableOpacity
          style={styles.back}
          onPress={() => this.props.navigation.navigate('Vacunas')}
        >
          <Text
            style={{ display: 'flex', alignItems: 'flex-start', textAlign: 'left' }}
          >Vacunas</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
});
