import React from 'react'
import { Image, ListUserItem, View, StyleSheet, TouchableOpacity, FlatList, LayoutAnimation } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ButtonGroup, Divider, Button, Text } from 'react-native-elements'

import * as firebase from 'firebase'

//VISTA HOME PRINCIPAL
export default class VacunasScreen extends React.Component {

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

  constructor() {
    super()
    this.state = {
      selectedIndex: 2,
      loading: false
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
    this.fetchAllUsers(selectedIndex)
    this.fetchFemale(selectedIndex)
    this.fetchMale(selectedIndex)
  }


  componentWillMount() {
    let i = 0
    this.props.fetchList(i)
    this.props.fetchProfileData()
  }

  fetchAllUsers(index) {
    if (index === 0) {
      this.props.fetchList(index)
    }
  }

  fetchFemale(index) {
    if (index === 1) {
      this.props.fetchList(index)
    }
  }

  fetchMale(index) {
    if (index === 2) {
      this.props.fetchList(index)
    }
  }

  renderItem ({item}) {
    return <ListUserItem user={item}/>
  }





  render() {

    const buttons = ['Vacuna pendiente', 'Vacuna aplicada', 'Todas']
    const { selectedIndex } = this.state


    LayoutAnimation.easeInEaseOut();
    return (
      <View style={styles.container}>
        <View>
          <ButtonGroup
            onPress={this.updateIndex.bind(this)}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 40, width: 'auto', backgroundColor: '#FFF' }}
            selectedButtonStyle={{ backgroundColor: '#EC2D74' }}
            textStyle={{ textAlign: 'center', fontSize: 16 }}
          />
        </View>

        <View>
          <FlatList
            data={this.props.users}
            renderItem={this.renderItem}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: '#E9446A',
    borderRadius: 4,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  },
  subtitle: {
    marginLeft: 10
  }
});
