import React from 'react'
import { ScrollView,Image, View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, AsyncStorage, StatusBar } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import * as firebase from 'firebase'


//VISTA HOME PRINCIPAL
export default class PerfilNinoScreen extends React.Component {

  static navigationOptions = {
    headerShown: false
  };

  constructor() {
    super()
    this.state = {
      Nino: ""
    }
    try {
      AsyncStorage.getItem('database_ninoinfo').then((value) => {
        this.setState({
          Nino:JSON.parse(value) 
        })
      })
    } catch(err) {
      console.log(err)
    }
  }
  parseData(){
    if(this.state.Nino){
      return this.state.Nino.map((dataNino, i) => {
        return (
          <View
            //MOSTRANDO LA DATA RECOLECTADA DEL NIÑO
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

        <ScrollView style={styles.container}>
          <StatusBar barStyle='light-content' ></StatusBar>
          {this.parseData()}


        </ScrollView>


      

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  infoCard: {
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#05A4AC',
    borderRadius: 4
  },
  cardContainer: {
    top: 100,
    height: 800,
  },

});
