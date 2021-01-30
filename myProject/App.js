import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {View, TextInput, Text, Alert, StyleSheet, TouchableOpacity} from 'react-native'


import Login from './Screens/log-in'
//import Signup from './Screens/sign-up'

class HelloWorldApp extends Component{
  constructor(props){
    super(props);

  }
  
  render() {
    return (
      <View>
       <Login></Login>
      </View>
      

    );
  }
}

export default HelloWorldApp;