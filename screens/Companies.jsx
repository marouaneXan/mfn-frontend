import { View, Text, ScrollView, StyleSheet, TextInput, Button } from 'react-native'
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

  const handleSearch = (companyName) => {
    const options = {
      method: 'POST',
      url: `${baseUrl}/companies/find`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: {
        companyName: companyName,
      },
    }
    axios
      .request(options)
      .then(function (response) {
        setCompanies(response.data)
      })
      .catch(function (error) {
        console.log(error);
        console.log('Company not found')
      }
      )
  };

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
      <ScrollView
        style={styles.scroll}
      >
        {companies?.map((company) => (
          <View style={styles.cart} key={company._id}>
            <Text>Company name : {company.companyName}</Text>
            <Text>Phone number : {company.phoneNumber}</Text>
            <Text>Company Number : {company.companyNumber}</Text>
            <Text>Company adress : {company.companyAddress}</Text>
            <Text>Longitude : {company.longitude}</Text>
            <Text>Latitude : {company.latitude}</Text>
          </View>
        ))}
      </ScrollView>
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