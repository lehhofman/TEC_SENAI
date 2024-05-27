import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from './componentes/LoginForm';
import OpcaoCalc from './componentes/OpcaoCalc';
import AgeScreen from './componentes/AgeScreen';
import InterestScreen from './componentes/InterestScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginForm}
          options={{ title: 'Bem-vindo' }}
        />
        <Stack.Screen
          name="OpcaoCalc"
          component={OpcaoCalc}
          options={{ title: 'Escolha uma opção' }}
        />
        <Stack.Screen
          name="AgeScreen"
          component={AgeScreen}
          options={{ title: 'Idade' }}
        />
        <Stack.Screen
          name="InterestScreen"
          component={InterestScreen}
          options={{ title: 'Juros' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}