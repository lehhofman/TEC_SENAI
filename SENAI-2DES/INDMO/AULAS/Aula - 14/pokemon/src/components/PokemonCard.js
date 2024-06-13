import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PokemonCard = ({ pokemon }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: pokemon.image }} style={styles.pokemonImage} />
      <Text style={styles.pokemonName}>{pokemon.name}</Text>
      <TouchableOpacity style={styles.detailsButton} onPress={toggleDetails}>
        <Text style={styles.detailsButtonText}>Detalhes</Text>
      </TouchableOpacity>
      {showDetails && (
        <View style={styles.detailsContainer}>
          <Text>ID: {pokemon.id}</Text>
          <Text>Altura: {pokemon.height}</Text>
          <Text>Peso: {pokemon.weight}</Text>
          <Text>Habilidade: {pokemon.abilities}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    alignItems: 'center',
    width: '20%',
  },
  pokemonImage: {
    width: 150,
    height: 150,
  },
  pokemonName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  detailsButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  detailsButtonText: {
    color: 'white',
  },
  detailsContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default PokemonCard;
