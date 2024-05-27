import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

const Dia4Screen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [sound, setSound] = useState();

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/cold1.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      })
    ).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/fundd.jpg')} style={styles.backgroundImage} />
      <Image source={require('../assets/star_wars_bg.png')} style={styles.logo} />
      <View style={styles.overlay}>
        <Text style={styles.title}>Chamada para o</Text>
        <Text style={styles.title}>Dia 4</Text>
        <Text style={styles.message}>
          Que a Força esteja com você! No Dia 4 de maio, celebramos o universo de Star Wars.
          Junte-se à comunidade galáctica em uma jornada épica pelas estrelas.
        </Text>
      </View>
      <TouchableOpacity onPress={playSound} style={styles.playButton}>
        <Text style={styles.playButtonText}>Play</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  overlay: {
    paddingHorizontal: 20,
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'yellow',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  logo: {
    width: 350,
    height: 300,
    resizeMode: 'contain',
    position: 'absolute',
    top: 50,
  },
  playButton: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  playButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Dia4Screen;
