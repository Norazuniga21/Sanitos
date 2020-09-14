import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import * as firebase from 'firebase'

//VISTA HOME PRINCIPAL
export default class TodasVacunas extends React.Component {


  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <View style={styles.container}>

        

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
