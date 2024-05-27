import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const StarWarsTrilogyScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/fundd.jpg')}
                style={styles.backgroundImage}
            />
            <Text style={styles.title}>A Primeira Trilogia de Star Wars</Text>
            <View style={styles.imagesContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/anakin.png')}
                />
                <Image
                    style={styles.image}
                    source={require('../assets/luke.jpg')}
                />
                <Image
                    style={styles.image}
                    source={require('../assets/leila.jpg')}
                />
            </View>
            <Text style={styles.description}>
                A primeira trilogia de Star Wars, também conhecida como a trilogia original, é composta por "Episódio IV: Uma Nova Esperança", "Episódio V: O Império Contra-Ataca" e "Episódio VI: O Retorno de Jedi". Esses filmes são icônicos e marcaram gerações, introduzindo personagens como Anakin Skywalker, Luke Skywalker e Princesa Leia.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'orange',
        textAlign: 'center',
    },
    imagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    image: {
        width: 120,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    description: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
});

export default StarWarsTrilogyScreen;
