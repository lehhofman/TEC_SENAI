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

      <Text style={styles.Text1}>

        My name is Leticia, I'm 18 years old, I finished high school in 2022, I'm currently taking a course in systems
        analysis and development at Senai, I have other courses already taken such as excel, Informatics, unraveling 5G
        and programming logic.

      </Text>

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
    fontSize: 20,
    width: 1134,
    textAlign: 'center',
    marginVertical: 5,
    color: 'white',
    fontFamily: 'Cursive',
    fontStyle: 'italic',
  },

  orangeText: {
    color: 'orange',
    fontSize: 35,
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
    width: 186,
    height: 68,
    borderRadius: 10,
  },

});
