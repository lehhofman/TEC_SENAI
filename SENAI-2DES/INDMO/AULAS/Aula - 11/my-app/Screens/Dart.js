import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native';

const StarWarsSalesPage = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/fundd.jpg')}
                style={styles.backgroundImage}
            />
            <Text style={styles.title}>Dia 4 de Star Wars</Text>
            <View style={styles.imagesContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/anakin.png')}
                />
                <Image
                    style={styles.image}
                    source={require('../assets/obi.jpg')}
                />
                <Image
                    style={styles.image}
                    source={require('../assets/kilo.jpg')}
                />
            </View>
            <Text style={styles.description}>
                Venha se juntar à galáxia na celebração do Dia 4 de Star Wars! Prepare-se para uma jornada épica através das estrelas e mergulhe na aventura intergaláctica. Que a Força esteja com você!
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.starwars.com/')}>
                <Image
                    style={styles.vaderImage}
                    source={require('../assets/dartgif.gif')}
                />
            </TouchableOpacity>
            <Text style={styles.cta}>Clique na imagem para saber mais!</Text>
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
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 40,
        color: 'orange',
        textAlign: 'center',
    },
    imagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
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
        marginBottom: 20,
    },
    vaderImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    cta: {
        fontSize: 16,
        color: 'orange',
    },
});

export default StarWarsSalesPage;
