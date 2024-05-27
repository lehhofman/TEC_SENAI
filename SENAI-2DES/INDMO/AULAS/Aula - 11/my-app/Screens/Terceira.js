import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const StarWarsThirdTrilogyScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/fundd.jpg')}
                style={styles.backgroundImage}
            />
            <Text style={styles.title}>A Terceira Trilogia de Star Wars</Text>
            <View style={styles.imagesContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/rey.jpg')}
                />
                <Image
                    style={styles.image}
                    source={require('../assets/finn.jpg')}
                />
                <Image
                    style={styles.image}
                    source={require('../assets/kilo.jpg')}
                />
            </View>
            <Text style={styles.description}>
                A terceira trilogia de Star Wars, também conhecida como a trilogia sequela, é composta por "Episódio VII: O Despertar da Força", "Episódio VIII: Os Últimos Jedi" e "Episódio IX: A Ascensão Skywalker". Esses filmes seguem as novas aventuras de personagens como Rey, Finn e Kylo Ren, enquanto eles enfrentam novas ameaças e desafios em uma galáxia muito, muito distante.
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

export default StarWarsThirdTrilogyScreen;
