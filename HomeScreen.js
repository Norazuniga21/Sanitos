import React from 'react'
import { ScrollView, Image, View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, AsyncStorage } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import * as firebase from 'firebase'


//VISTA HOME PRINCIPAL
export default class HomeScreen extends React.Component {
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

  constructor() {
    super()
    this.state = {
      Nino: ""
    }
    try {
      AsyncStorage.getItem('database_ninoinfo').then((value) => {
        this.setState({
          Nino: JSON.parse(value)
        })
      })
    } catch (err) {
      console.log(err)
    }
  }
  parseData() {
    if (this.state.Nino) {
      return this.state.Nino.map((dataNino, i) => {
        return (
          <View
            style={styles.infoCard}
            key={i}>

            <View>
              <Text
                style={{ textAlign: 'center', backgroundColor: '#05A4AC', padding: 6, color: '#fff', textTransform: 'uppercase' }}
              >{dataNino.name} </Text>
            </View>

            <View
              style={{ flexDirection: 'row' }}
            >
              <View>
                <Image
                  source={require('../recursos/imagenes/logoSanitos.png')}
                  style={{ width: 70, height: 70 }}
                />
              </View>
              <View
              style={{padding:10}}
              >
                <Text>{dataNino.escolaridade} </Text>
                <Text>{dataNino.sangre} </Text>
                <Text>{dataNino.data} </Text>

              </View>


            </View>
            <View>
              <Text 
              style={{textAlign:'center', padding:6}}
              > + Presiona aqui para ver mas  </Text>
            </View>
          </View>
        )
      })
    }
  }

  render() {

    LayoutAnimation.easeInEaseOut();

    return (
      <View style={styles.container}>



        <ScrollView
        >
          <Text style={{ marginTop: 80 }}>
            Bienvenida {this.state.email} !{'\n'}
          Estamos felices de verte por aquí
          </Text>
          <View style={styles.container}>
            {this.parseData()}
          </View>
        </ScrollView>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  infoCard: {
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#05A4AC',
    borderRadius: 4
  },
  cardContainer: {
    top: 100,
    height: 800,
  },

});
