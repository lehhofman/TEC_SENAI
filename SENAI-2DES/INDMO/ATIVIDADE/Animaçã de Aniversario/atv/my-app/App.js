import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

const cakeImage = require('./assets/cake.png');
const candleLitImage = require('./assets/candle_lit.png');
const candleUnlitImage = require('./assets/candle_unlit.png');

export default function App() {
  const [candleLit, setCandleLit] = useState(false);

  const toggleCandle = () => {
    setCandleLit(!candleLit);
  };

  const toggleAllCandles = () => {
    setCandleLit(!candleLit);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAllCandles}>
        <Text style={styles.button}>Feliz Aniversário</Text>
      </TouchableOpacity>
      <Image source={cakeImage} style={styles.cakeImage} />
      <TouchableOpacity onPress={toggleCandle} style={styles.candleTouchable}>
        <Image
          source={candleLit ? candleLitImage : candleUnlitImage}
          style={[styles.candleImage, candleLit && styles.candleLit]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 50,
    marginBottom: 50,
    backgroundColor: '#ffff43',
    border:'3px solid #ffff',
    borderRadius: 20,
  },
  cakeImage: {
     width: 500,
     height: 500,
     top:60,
  },
  candleTouchable: {
    position: 'absolute',
     top: 340,
     left: 915,
  },
  candleImage: {
    width: 30,
    height: 180,
  },
  candleLit: {
    width: 30,
    height:220,
  },
});