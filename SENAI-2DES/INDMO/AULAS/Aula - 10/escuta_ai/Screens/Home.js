import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons'; // Importe os ícones que deseja utilizar

const MusicPlayer = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlists, setPlaylists] = useState([
    [
      { name: 'Hear Me Now', uri: require('./mus/alok1.mp3'), image: require('./img/alok1.jpg') },
      { name: 'Ocean', uri: require('./mus/alok2.mp3'), image: require('./img/alok2.jpg') },
      { name: 'Alive', uri: require('./mus/alok3.mp3'), image: require('./img/alok3.jpg') },
      { name: 'Monster', uri: require('./mus/alok4.mp3'), image: require('./img/alok4.jpg') },
      { name: 'Love Again', uri: require('./mus/alok5.mp3'), image: require('./img/alok5.jpg') }
    ],
    [
      { name: 'Paradise', uri: require('./mus/cold1.mp3'), image: require('./img/cold1.jpg') },
      { name: 'The Scientist', uri: require('./mus/cold2.mp3'), image: require('./img/cold2.jpg') },
      { name: 'A Sky Full Of Stars', uri: require('./mus/cold3.mp3'), image: require('./img/cold3.jpg') },
      { name: 'Viva La Vida', uri: require('./mus/cold4.mp3'), image: require('./img/cold4.jpg') },
      { name: 'Adventure Of A Lifetime', uri: require('./mus/cold5.mp3'), image: require('./img/cold5.jpg') }
    ],
    [
      { name: 'Céu Azul', uri: require('./mus/char1.mp3'), image: require('./img/char1.jpg') },
      { name: 'Só os Loucos Sabem', uri: require('./mus/char2.mp3'), image: require('./img/char2.jpg') },
      { name: 'Dias De Luta, Dias De Glória', uri: require('./mus/char3.mp3'), image: require('./img/char3.jpg') },
      { name: 'Como Tudo Deve Ser', uri: require('./mus/char4.mp3'), image: require('./img/char4.jpg') },
      { name: 'Senhor Do Tempo', uri: require('./mus/char5.mp3'), image: require('./img/char5.jpg') }
    ]
  ]);
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playSound = async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(playlists[currentPlaylistIndex][currentSongIndex].uri);
    setSound(newSound);
    await newSound.playAsync();
    setIsPlaying(true);
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const playNext = async () => {
    if (currentSongIndex < playlists[currentPlaylistIndex].length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    } else {
      setCurrentSongIndex(0);
    }

    await playSound();
  };

  const playPrevious = async () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    } else {
      setCurrentSongIndex(playlists[currentPlaylistIndex].length - 1);
    }

    await playSound();
  };

  const changePlaylist = (index) => {
    setCurrentPlaylistIndex(index);
    setCurrentSongIndex(0); 
  };

  useEffect(() => {
    playSound();
  }, [currentPlaylistIndex, currentSongIndex]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escuta aí</Text>
      <View style={styles.playlistContainer}>
        <TouchableOpacity onPress={() => changePlaylist(0)}>
          <Text style={styles.playlistButton}>Playlist 1</Text>
        </TouchableOpacity>
        <View style={styles.buttonSpacer} />
        <TouchableOpacity onPress={() => changePlaylist(1)}>
          <Text style={styles.playlistButton}>Playlist 2</Text>
        </TouchableOpacity>
        <View style={styles.buttonSpacer} />
        <TouchableOpacity onPress={() => changePlaylist(2)}>
          <Text style={styles.playlistButton}>Playlist 3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.songInfoContainer}>
        <Image
          source={playlists[currentPlaylistIndex][currentSongIndex].image}
          style={styles.albumArt}
        />
        <Text style={styles.songName}>{playlists[currentPlaylistIndex][currentSongIndex].name}</Text>
      </View>
      <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={playPrevious}>
          <AntDesign name="stepbackward" size={36} color="#1DB954" />
        </TouchableOpacity>
        <TouchableOpacity onPress={isPlaying ? pauseSound : playSound}>
          {isPlaying ? (
            <AntDesign name="pausecircle" size={36} color="#1DB954" />
          ) : (
            <AntDesign name="pausecircleo" size={36} color="#1DB954" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={playNext}>
          <AntDesign name="stepforward" size={36} color="#1DB954" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 54,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  playlistContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  playlistButton: {
    fontSize: 18,
    color: '#1DB954',
  },
  playlistButton:{
    width: 100,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#1DB954',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  buttonSpacer: {
    width: 50, 
  },
  songInfoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  albumArt: {
    width: 300,
    height: 300,
    marginBottom: 10,
    borderRadius: 150, 
    borderWidth: 3, 
    borderColor: '#1DB954', 
  },
  songName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default MusicPlayer;
