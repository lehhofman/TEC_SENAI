import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      

      <Text style={styles.Text}>PRIMEIRA AULA EXPO!</Text>
      
      <Image
       style={styles.logo}
      source={{
        uri:'https://miro.medium.com/v2/resize:fit:679/1*OAXivevUVDA6ddtq-7jwVw.gif'
      }}
      />

      <Text style={styles.Text}>SENAI 2024!</Text>

      <StatusBar style="auto" />
      
    </View>

  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
  },

  Text: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    fontFamily: 'Cursive',
    fontStyle: 'italic',
    color: '#4B0082',
  },

  logo: {
    width: 386,
    height: 158,
    marginTop: 30,
    borderRadius: 10,
    
  },
});
