import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        style={styles.logo}
        source={{
          uri: 'https://lehhofman.github.io/assets/img/l.png'
        }}
      />

      <Text style={styles.orangeText}>LETICIA HOFMAN</Text>

      <Text style={styles.Text1}>

        My name is Leticia, I'm 18 years old, I finished high school in 2022, I'm currently taking a course in systems
        analysis and development at Senai, I have other courses already taken such as excel, Informatics, unraveling 5G
        and programming logic.

      </Text>

      <Text style={styles.orangeText}>FORMATION:</Text>

      <View style={styles.bulletPoint}>

        <Text style={styles.Text1}>• BASIC EXCEL, SENAI-EAD, DURATION OF 20H, COMPLETED ON 15/09/2023.</Text>
        <Text style={styles.Text1}>• UNVEILING 5G, SENAI-EAD, DURATION OF 15H, COMPLETED IN 2023.</Text>
        <Text style={styles.Text1}>• PROGRAMMING LOGIC, SENAI-EAD, DURATION OF 14H, COMPLETED IN 2023.</Text>
        <Text style={styles.Text1}>• PROMOTED BY EDUCA, HELD FROM 08/08/2016 TO 08/08/2017.</Text>
        <Text style={styles.Text1}>• POWER BI, SENAI, DURATION OF 20H, COMPLETED ON 10/21/2023.</Text>
        <Text style={styles.Text1}>• SYSTEMS ANALYSIS AND DEVELOPMENT, SENAI, DURATION 1 AND A HALF YEARS, EXPECTED ENDING IN DECEMBER 2024.</Text>

      </View>

      <Text style={styles.orangeText}>Link GitHub:</Text>

      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/lehhofman')}>

        <Image

          style={styles.githubLogo}
          source={{
            uri: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
          }}

        />

      </TouchableOpacity>

      <StatusBar style="auto" />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black', 
    alignItems: 'center',
    justifyContent: 'center',
  },

  Text1: {
    fontSize: 22,
    width: 1234,
    textAlign: 'center',
    marginVertical: 5,
    color: 'white',
    fontFamily: 'Cursive',
    fontStyle: 'italic',
  },

  orangeText: {
    color: 'orange',
    fontSize: 38,
    textAlign: 'center',
    marginVertical: 5,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontStyle: 'italic', 
    marginTop: 50,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  bulletPoint: {
    fontSize: 19,
    width: 1234,
    textAlign: 'center',
    marginVertical: 5,
    color: 'white',
    fontFamily: 'Cursive',
    fontStyle: 'italic',
  },

  logo: {
    width: 286,
    height: 158,
    marginTop: 30,
    borderRadius: 10,
  },

  githubLogo: {
    width: 50,
    height: 50,
    marginVertical: 10,
  },

});
