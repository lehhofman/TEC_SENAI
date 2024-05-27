//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ScreenIMC from './componentes/formIMC';
import loginForm from './componentes/loginForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen 

        name="Login" 
        component={loginForm} 
        options={{title:'Bem Vindo!'}}

        />

        <Stack.Screen
        
        name="telaIMC"
        component={ScreenIMC} 
        options={{title:'Calcule seu IMC'}}
         
        />
      </Stack.Navigator>
    </NavigationContainer>
    

  );
}

