import { View, Text, FlatList, StyleSheet, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const baseUrl = 'http://192.168.56.1:5000/api'

const Companies = () => {
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

  const [companyName, setCompanyName] = useState();

  const handleSearch = async (companyName) => {
    try {
      const response = await axios.get(`${baseUrl}/companies/find?companyName=${companyName}`);
      setCompanies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.cart} key={item._id}>
      <Text>Company name : {item.companyName}</Text>
      <Text>Phone number : {item.phoneNumber}</Text>
      <Text>Company Number : {item.companyNumber}</Text>
      <Text>Company adress : {item.companyAddress}</Text>
      <Text>Longitude : {item.longitude}</Text>
      <Text>Latitude : {item.latitude}</Text>
    </View>
  );

  return (
    <View style={styles.companiesList}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={companyName}
          onChangeText={(text) => setCompanyName(text)}
        />
        <Button title="Search" onPress={() => handleSearch(companyName)} />
      </View>
      <Text
        style={styles.title}
      >Companies List :</Text>
      <FlatList
        data={companies}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        style={styles.scroll}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  companiesList: {
    backgroundColor: '#fff',
    padding: 10,
    paddingRight: 20,
    marginLeft: 0,
    width: '100%',
    height: '100%',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    gap: 10
  },
  cart: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginLeft: 10,
    elevation: 5,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  scroll: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingBottom: 10,
  },
  input: {
    marginVertical: 12,
    width: "100%",
    padding: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    fontSize: 10,
    shadowColor: "#000",
  },

});

export default Companies