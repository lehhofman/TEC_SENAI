import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PlaylistsPage = ({ navigation }) => {
  const playlists = [
    [
      { name: 'Hear Me Now', image: require('./img/alok1.jpg') },
      { name: 'Ocean', image: require('./img/alok2.jpg') },
      { name: 'Alive', image: require('./img/alok3.jpg') },
      { name: 'Monster', image: require('./img/alok4.jpg') },
      { name: 'Love Again', image: require('./img/alok5.jpg') }
    ],
    [
      { name: 'Paradise', image: require('./img/cold1.jpg') },
      { name: 'The Scientist', image: require('./img/cold2.jpg') },
      { name: 'A Sky Full Of Stars', image: require('./img/cold3.jpg') },
      { name: 'Viva La Vida', image: require('./img/cold4.jpg') },
      { name: 'Adventure Of A Lifetime', image: require('./img/cold5.jpg') }
    ],
    [
      { name: 'Céu Azul', image: require('./img/char1.jpg') },
      { name: 'Só os Loucos Sabem', image: require('./img/char2.jpg') },
      { name: 'Dias De Luta, Dias De Glória', image: require('./img/char3.jpg') },
      { name: 'Como Tudo Deve Ser', image: require('./img/char4.jpg') },
      { name: 'Senhor Do Tempo', image: require('./img/char5.jpg') }
    ]
  ];

  const navigateToMusicPlayer = (playlistIndex) => {
    navigation.navigate('MusicPlayer', { playlistIndex });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha uma Playlist</Text>
      {playlists.map((playlist, index) => (
        <TouchableOpacity key={index} onPress={() => navigateToMusicPlayer(index)} style={styles.playlistContainer}>
          <Text style={styles.playlistName}>Playlist {index + 1}</Text>
          <View style={styles.playlistSongsContainer}>
            {playlist.map((song, songIndex) => (
              <View key={songIndex} style={styles.songContainer}>
                <Image source={song.image} style={styles.albumArt} />
                <Text style={styles.songName}>{song.name}</Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      ))}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  playlistContainer: {
    marginBottom: 20,
  },
  playlistName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1DB954',
    marginBottom: 10,
  },
  playlistSongsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  songContainer: {
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 10,
  },
  albumArt: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#1DB954',
  },
  songName: {
    color: 'white',
    marginTop: 5,
  },
});

export default PlaylistsPage;
