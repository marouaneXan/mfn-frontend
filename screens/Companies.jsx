import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
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

  return (
    <View style={styles.companiesList}>
      <Text
        style={styles.title}
      >Companies List :</Text>
      <ScrollView
        style={styles.scroll}
      >
        {companies?.map((company) => (
          <View style={styles.cart} key={company._id}>
            <Text>Company name : {company.company_name}</Text>
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
  }

});

export default Companies