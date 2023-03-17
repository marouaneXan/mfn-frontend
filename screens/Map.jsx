import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useState, useEffect } from 'react';

const baseUrl = 'http://192.168.56.1:5000/api'

const Map = ({ navigation }) => {
  const [companies, setCompanies] = useState([])
  const getCompanies = async () => {
    try {
      const response = await fetch(`${baseUrl}/companies`);
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCompanies()
  }, [])

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      >
        {
          companies?.map((company) => (
            <Marker coordinate={{ latitude: parseFloat(company.latitude), longitude: parseFloat(company.longitude) }} key={company._id} />
          ))
        }
      </MapView>
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
  button: {
    padding: 6
  },
  link: {
    textAlign: 'center',
    marginTop: 2
  }
});

export default Map