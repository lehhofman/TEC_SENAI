import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

const Links = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Find me on social media:</Text>
            <View style={styles.socialLinks}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/lehhofman/')}>
                    <Image
                        style={styles.socialIcon}
                        source={require('./insta.png')}
                    />
                    <Text style={styles.socialText}>Instagram</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('in/leticia-hofman-202955299')}>
                    <Image
                        style={styles.socialIcon}
                        source={require('./lik.png')}
                    />
                    <Text style={styles.socialText}>Linkedin </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/lehhofman')}>
                    <Image
                        style={styles.socialIcon}
                        source={require('./git.png')}
                    />
                    <Text style={styles.socialText}>GitHub </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'orange',
    },
    socialLinks: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '70%',
        marginTop: 20,
    },
    socialIcon: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    socialText: {
        fontSize: 16,
        marginTop: 5,
        color: 'orange',
    },
});

export default Links;
