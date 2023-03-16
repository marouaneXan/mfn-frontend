import { View, Text, ScrollView,StyleSheet } from 'react-native'
import React from 'react'

const Companies = () => {
  return (
    <View style={styles.companiesList}>
      <Text
        style={styles.title}
      >Companies List :</Text>
      <ScrollView
        style={styles.scroll}
      >
        <View style={styles.cart}>
          <Text>Name : company ste</Text>
          <Text>Manager : company manager</Text>
          <Text>Phone : company num</Text>
          <Text>Address : company address</Text>
        </View>
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
    borderBottomRightRadius : 10,
    borderTopRightRadius : 10,
    gap : 10
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