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
      inactiveColor='orange'
      barStyle={{backgroundColor:'#3e2465'}}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarLabel:'Home',
            tabBarIcon: ({color}) => (
              <Ionicons name='home' size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='formação'
          component={formação}
          options={{
            tabBarLabel:'Training',
            tabBarIcon: ({color}) => (
              <Ionicons name='school' size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='Links'
          component={Buscar}
          options={{
            tabBarLabel:'Links',
            tabBarIcon: ({color}) => (
              <Ionicons name='search' size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='Contato'
          component={Contato}
          options={{
            tabBarLabel:'Contact',
            tabBarIcon: ({color}) => (
              <Ionicons name='information-circle' size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};