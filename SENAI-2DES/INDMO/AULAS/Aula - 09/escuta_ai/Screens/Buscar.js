import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const QuemSomos = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('./img/Logo Escuta ai.png')}
            />
            <Text style={styles.title}>Quem Somos</Text>
            <Text style={styles.subtitle}>Nossa Missão</Text>
            <Text style={styles.description}>
                Nosso objetivo é fornecer soluções tecnológicas inovadoras e de alta qualidade que atendam às necessidades específicas de nossos clientes. Estamos comprometidos em superar as expectativas, impulsionar o crescimento de nossos parceiros e contribuir positivamente para a comunidade.
            </Text>
            <Text style={styles.subtitle}>Nossos Valores</Text>
            <Text style={styles.value}>1. Inovação: Buscamos constantemente novas maneiras de melhorar e criar valor.</Text>
            <Text style={styles.value}>2. Integridade: Agimos com honestidade, transparência e ética em todas as nossas interações.</Text>
            <Text style={styles.value}>3. Colaboração: Acreditamos no poder do trabalho em equipe e na diversidade de ideias.</Text>
            <Text style={styles.value}>4. Excelência: Nosso compromisso com a excelência impulsiona nosso trabalho em cada projeto que realizamos.</Text>
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
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        color: '#1DB954',
    },
    description: {
        fontSize: 19,
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 20,
        color: 'white',
    },
    value: {
        fontSize: 16,
        textAlign: 'left',
        lineHeight: 24,
        marginBottom: 10,
        color: 'white',
    },
});

export default QuemSomos;
