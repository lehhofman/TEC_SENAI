import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import Home from './Screens/Home';
import Primeira from './Screens/Primeira';
import Segunda from './Screens/Segunda';
import Terceira from './Screens/Terceira';
import Dart from './Screens/Dart';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName='Home'
      activeColor='#DAA520'
      inactiveColor='black'
      barStyle={{backgroundColor:'#ffffff'}}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarLabel:'Dia 4',
            tabBarIcon: ({color}) => (
              <Ionicons name='star-sharp' size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='Primeira'
          component={Primeira}
          options={{
            tabBarLabel:'1° Saga',
            tabBarIcon: ({color}) => (
              <Ionicons name='film-outline' size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='Segunda'
          component={Segunda}
          options={{
            tabBarLabel:'2° Saga',
            tabBarIcon: ({color}) => (
              <Ionicons name='film-outline' size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='Terceira'
          component={Terceira}
          options={{
            tabBarLabel:'3° Saga',
            tabBarIcon: ({color}) => (
              <Ionicons name='film-outline' size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='Dart'
          component={Dart}
          options={{
            tabBarLabel:'Vader',
            tabBarIcon: ({color}) => (
              <Ionicons name='ticket' size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};