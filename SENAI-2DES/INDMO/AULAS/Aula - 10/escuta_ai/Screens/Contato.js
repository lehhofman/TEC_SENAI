import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ContactForm = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                />
                <TextInput
                    style={[styles.input, styles.messageInput]}
                    placeholder="Peça sua Musica"
                    multiline
                />
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Enviar</Text>
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
    title: {
        fontSize: 34,
        color: '#1DB954',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    inputContainer: {
        width: '18%',
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    messageInput: {
        height: 100,
    },
    buttonContainer: {
        backgroundColor: '#1DB954',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default ContactForm;
