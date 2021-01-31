import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';

import Login from './Screens/log-in';
import Signup from './Screens/sign-up';
import HomeScreen from './Screens/home-screen';


const Drawer = createDrawerNavigator();


class HelloWorldApp extends Component{


  render() 
  {
    return (
      <NavigationContainer>
      <Drawer.Navigator>

        <Drawer.Screen name = "Home" component = {HomeScreen}  />
        <Drawer.Screen name = "Log in" component = {Login} />
        <Drawer.Screen name = "Sign up" component = {Signup} />
        
      </Drawer.Navigator>
      </NavigationContainer>
      
    );
  }
}



export default HelloWorldApp;