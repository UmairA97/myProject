import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
//import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

import Login from './Screens/log-in';
import Signup from './Screens/sign-up';
import HomeScreen from './Screens/home-screen';
import Logout from './Screens/log-out';
import Reviews from './Screens/reviews';
import User from './Screens/user-details';
import Location from './Screens/all-locations';
import Update from './Screens/coffee';
import updateReviews from './Screens/update-review';

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
        <Drawer.Screen name = "Location Info" component = {Location} />
        <Drawer.Screen name = "Reviews" component = {Reviews} />
        <Drawer.Screen name = "User Details" component = {User} />
        <Drawer.Screen name = "View Reviews" component = {Update} />
        <Drawer.Screen name = "Update Reviews" component = {updateReviews} />
        <Drawer.Screen name = "Log out" component = {Logout} />
      </Drawer.Navigator>
      </NavigationContainer>
      
    );
  }
}

export default HelloWorldApp;