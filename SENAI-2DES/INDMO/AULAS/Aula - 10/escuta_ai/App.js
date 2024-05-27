import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import Home from './Screens/Home';
import Buscar from './Screens/Buscar';
import formação from './Screens/formação';
import Contato from './Screens/Contato';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName='Home'
      activeColor='black'
      inactiveColor='black'
      barStyle={{backgroundColor:'#1DB954'}}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarLabel:'Player de musica',
            tabBarIcon: ({color}) => (
              <Ionicons name='play' size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='formação'
          component={formação}
          options={{
            tabBarLabel:'Playlists',
            tabBarIcon: ({color}) => (
              <Ionicons name='list' size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='Links'
          component={Buscar}
          options={{
            tabBarLabel:'Quem somos',
            tabBarIcon: ({color}) => (
              <Ionicons name='search' size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='Contato'
          component={Contato}
          options={{
            tabBarLabel:'Peça sua musica',
            tabBarIcon: ({color}) => (
              <Ionicons name='information-circle' size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
