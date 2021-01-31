import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Screens/log-in';
import Signup from './Screens/sign-up';
import HomeScreen from './Screens/home-screen';




const Stack = createStackNavigator();

class HelloWorldApp extends Component{


  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name = "Home" component = {HomeScreen}  />
        <Stack.Screen name = "Log in" component = {Login} />
        <Stack.Screen name = "Sign up" component = {Signup} />
        
      </Stack.Navigator>
      </NavigationContainer>
      
    );
  }
}



export default HelloWorldApp;