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
          onPress={() => this.props.navigation.navigate('Vacunas')}
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

<TouchableOpacity 
style={styles.back}
onPress ={ () => this.props.navigation.goBack() }
>
<Ionicons name='ios-arrow-round-back' size={32} color='#FFF'  ></Ionicons>
</TouchableOpacity>