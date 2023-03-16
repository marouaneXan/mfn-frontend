import MapView from 'react-native-maps';
import { StyleSheet, View,TouchableOpacity,Text } from 'react-native';

const Map = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <View style={styles.button}>
        <TouchableOpacity>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Companies")}
          >
            Companies
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '90%',
  },
  button:{
    padding:6
  },
  link:{
    textAlign:'center',
    marginTop:2
  }
});

export default Map