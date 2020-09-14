import React from 'react'
import { View, Alert, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, Picker, AsyncStorage } from 'react-native'
import DatePicker from 'react-native-datepicker'



//FORMULARIO AGREGAR NIÑO
export default class PostScreen extends React.Component {

  static navigationOptions = {
    headerShown: false
  };

  state = {
    name: ""
  }

  state = {
    escolaridade: ""
  };

  state = {
    sangre: ""
  };

  state = {
    data: ""
  };

  changeName(name) {
    this.setState({ name })
  }

  changeDate = (valor) => {
    this.setState({
      data: valor
    })
  }

  buttonPressed() {
    const arrayDataNino = [];
    if (this.state.name && this.state.escolaridade && this.state.sangre && this.state.data) {
      const dataNino = {
        name: this.state.name,
        escolaridade: this.state.escolaridade,
        sangre: this.state.sangre,
        data: this.state.data
      }
      arrayDataNino.push(dataNino);
      try {
        AsyncStorage.getItem('database_ninoinfo').then((value) => {
          if (value !== null) {
            const d = JSON.parse(value);
            d.push(dataNino)
            AsyncStorage.setItem('database_ninoinfo', JSON.stringify(d)).then(() => {
              this.props.navigation.navigate('Nino')
            })
          } else {
            AsyncStorage.setItem('database_ninoinfo', JSON.stringify(arrayDataNino)).then(() => {
              this.props.navigation.navigate('Nino')
            })
          }
        })
      } catch (err) {
        console.log(err)
      }
    } else {
      Alert.alert('Falta completar un campo')
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.form}>

          <View>
            <Text
              style={styles.title1}
            >Agregar niña/a</Text>
          </View>

          <View>

            <TextInput
              style={styles.input}
              placeholder='Nombre'
              autoCapitalize='none'
              onChangeText={(name) => this.changeName(name)}
              value={this.state.name}
            ></TextInput>
          </View>



          <View>

            <Picker
              style={styles.pickerComponent}
              selectedValue={this.state.escolaridade}
              onValueChange={
                (itemValor, itemIndex) =>
                  this.setState({
                    escolaridade: itemValor
                  })
              }

            >
              <Picker.Item label='Sexo' value='' />
              <Picker.Item label='Niña' value='Niña' />
              <Picker.Item label='Niño' value='Niño' />

            </Picker>
          </View>

          <View>

            <Picker
              style={styles.pickerComponent}
              selectedValue={this.state.sangre}
              onValueChange={
                (itemValor, itemIndex) =>
                  this.setState({
                    sangre: itemValor
                  })
              }
            >
              <Picker.Item label='Tipo de sangre' value='' />
              <Picker.Item label='A positivo' value='A positivo' />
              <Picker.Item label='A negativo' value='A negativo' />
              <Picker.Item label='B positivo' value='B positivo' />
              <Picker.Item label='B negativo' value='B negativo' />
              <Picker.Item label='O negativo' value='O negativo' />
              <Picker.Item label='O negativo' value='O negativo' />
              <Picker.Item label='AB positivo' value='AB positivo' />
              <Picker.Item label='AB negativo' value='AB negativo' />


            </Picker>
          </View>

          <View>
            <DatePicker
              format="DD/MM/YYYY"
              style={styles.dateComponent}
              date={this.state.data}
              onDateChange={this.changeDate}
            />
          </View>





          <TouchableOpacity
            style={styles.button}
            onPress={() => this.buttonPressed()}
          >
            <Text
              style={{ color: '#ffffff', fontWeight: '500' }}
            >Agregar</Text>
          </TouchableOpacity>
          <View>

          </View>







        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title1: {
    textAlign: 'center',
    fontSize: 15,
    color: '#8A8F9E',
    marginBottom: 20,
    marginTop: 20,
    textTransform: 'uppercase'
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FFF'
  },
  errorMessage: {
    color: '#E9446A',
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30
  },
  error: {
    color: '#E9446A',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center'
  },
  form: {
    marginBottom: 48,
    marginTop: 10,
    marginHorizontal: 30
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase'
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    height: 40,
    fontSize: 15,
    color: '#161F3D',
    padding: 10,
  },
  button: {
    position: 'absolute',
    top: 500,
    backgroundColor: '#E9446A',
    borderRadius: 4,
    height: 52,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  back: {
    position: 'absolute',
    top: 48,
    left: 32,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(211, 22, 48, 0.1)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E1E2E6',
    marginTop: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pickerComponent: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase',
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 20
  },
  dateComponent: {
    width: 'auto',
    marginTop: 20
  }
})