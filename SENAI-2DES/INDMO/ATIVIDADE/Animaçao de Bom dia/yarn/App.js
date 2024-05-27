import React, { useState } from 'react';
import { StatusBar, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isDay, setIsDay] = useState(true);

  const toggleDayNight = () => {
    setIsDay(!isDay);
  };

  const getGreeting = () => {
    return isDay ? 'Bom dia' : 'Boa noite';
  };

  const getBackgroundColor = () => {
    return isDay ? '#ffff99' : '#99ccff';
  };

  const handleButtonClick = () => {
    toggleDayNight(); 
  };

  return (

    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>

      <TouchableOpacity onPress={toggleDayNight} style={styles.toggleButton}>

      {/* //botao para trocar imagem sol para lua */}
        <Image 
          source={isDay ? require('./assets/sun.png') : require('./assets/moon.png')}
          style={styles.icon}
        />

      </TouchableOpacity>

      {/* //botao para modificar de sol para lua */}
      <TouchableOpacity onPress={handleButtonClick} style={styles.toggleButton}>
        <Text style={styles.buttonText}>Clica aqui</Text> 
      </TouchableOpacity>

      {/* //botao para modificar texto */}
      <TouchableOpacity onPress={toggleDayNight} style={styles.toggleButton}>
        <Text style={styles.greeting}>{getGreeting()}</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  toggleButton: {
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'blue',
    top: 150,
    backgroundColor: 'yellow',
    borderRadius: 90,
    borderWidth: 5,
  },

  icon: {
    width: 200,
    height: 200,
  },

  greeting: {
    fontSize: 54,
    fontWeight: 'bold',
  },

});