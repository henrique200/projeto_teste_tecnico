import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons'

import { RegisterOrDelete } from '../pages/Register';
import {Search} from '../pages/Search'

const Tab = createBottomTabNavigator();

export function Route() {
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Registrar') {
                iconName = focused
                  ? 'notes'
                  : 'notes';
              } else if (route.name === 'Consultar') {
                iconName = focused ? 'search' : 'search';
              }
  
              return <MaterialIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#FF872C',
            tabBarInactiveTintColor: 'gray',
            headerShown: false
          })}
        >
            <Tab.Screen name='Registrar' component={RegisterOrDelete}/>
            <Tab.Screen name='Consultar' component={Search}/>
        </Tab.Navigator>
    );
}