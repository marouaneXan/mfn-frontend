import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import Footer from '../components/Footer';

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <Footer/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });

export default Map