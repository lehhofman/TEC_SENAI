import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const StarWarsSecondTrilogyScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/fundd.jpg')}
                style={styles.backgroundImage}
            />
            <Text style={styles.title}>A Segunda Trilogia de Star Wars</Text>
            <View style={styles.imagesContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/obi.jpg')}
                />
                <Image
                    style={styles.image}
                    source={require('../assets/anakin.png')}
                />
                <Image
                    style={styles.image}
                    source={require('../assets/padme.jpg')}
                />
            </View>
            <Text style={styles.description}>
                A segunda trilogia de Star Wars, também conhecida como a trilogia prequela, é composta por "Episódio I: A Ameaça Fantasma", "Episódio II: Ataque dos Clones" e "Episódio III: A Vingança dos Sith". Esses filmes exploram a ascensão de Anakin Skywalker como Darth Vader e os eventos que levaram à queda da República Galáctica.
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

export default StarWarsSecondTrilogyScreen;
