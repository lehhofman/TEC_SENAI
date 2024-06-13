import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const fetchPokemonList = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=30');
      const results = response.data.results;
      const pokemonData = await Promise.all(results.map(async (pokemon) => {
        const response = await axios.get(pokemon.url);
        return {
          name: pokemon.name,
          id: response.data.id,
          height: response.data.height,
          weight: response.data.weight,
          image: response.data.sprites.front_default,
          abilities: response.data.abilities.map((abilityInfo) => abilityInfo.ability.name),
        };
      }));
      setPokemonList(pokemonData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pokémon</Text>
      <FlatList
        data={pokemonList}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        keyExtractor={(item) => item.name}
        style={styles.list}
        numColumns={8} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 20,
  },
  list: {
    width: '100%',
  },
});
