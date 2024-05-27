import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        style={styles.logo}
        source={{
          uri: 'https://lehhofman.github.io/assets/img/l.png'
        }}
      />

      <Text style={styles.orangeText}>LETICIA HOFMAN</Text>

      <Text style={styles.orangeText}>Training:</Text>

      <View style={styles.bulletPoint}>

        <Text style={styles.Text1}>• BASIC EXCEL, SENAI-EAD, DURATION OF 20H, COMPLETED ON 15/09/2023.</Text>
        <Text style={styles.Text1}>• UNVEILING 5G, SENAI-EAD, DURATION OF 15H, COMPLETED IN 2023.</Text>
        <Text style={styles.Text1}>• PROGRAMMING LOGIC, SENAI-EAD, DURATION OF 14H, COMPLETED IN 2023.</Text>
        <Text style={styles.Text1}>• PROMOTED BY EDUCA, HELD FROM 08/08/2016 TO 08/08/2017.</Text>
        <Text style={styles.Text1}>• POWER BI, SENAI, DURATION OF 20H, COMPLETED ON 10/21/2023.</Text>
        <Text style={styles.Text1}>• SYSTEMS ANALYSIS AND DEVELOPMENT, SENAI, DURATION 1 AND A HALF YEARS, EXPECTED ENDING IN DECEMBER 2024.</Text>

      </View>

      <StatusBar style="auto" />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black', 
    alignItems: 'center',
    justifyContent: 'center',
  },

  Text1: {
    fontSize: 15,
    width: 1234,
    textAlign: 'center',
    marginVertical: 5,
    color: 'white',
    fontFamily: 'Cursive',
    fontStyle: 'italic',
  },

  orangeText: {
    color: 'orange',
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 5,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontStyle: 'italic', 
    marginTop: 50,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  bulletPoint: {
    fontSize: 19,
    width: 1234,
    textAlign: 'center',
    marginVertical: 5,
    color: 'white',
    fontFamily: 'Cursive',
    fontStyle: 'italic',
  },

  logo: {
    width: 156,
    height: 68,
    marginTop: 30,
    borderRadius: 10,
  },

});
