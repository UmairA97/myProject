import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';


class HomeScreen extends Component{


  render() {
    
   const navigation = this.props.navigation;

    return ( 

      <ScrollView>

      <View style ={styles.Header}>
      <Text style = {styles.text}> Coffida</Text>
      </View>

      <View style = {styles.main}>
      <Text style = {styles.text}> Welcome</Text>
      </View>

      <View style = {styles.mains}>
      <Text style = {styles.mini}> Your one stop place for a coffee fix</Text>
      </View>

      <View style = {styles.container}>
      <Button 
      title = "Log in"
      onPress = {() => navigation.navigate('Log in')}
      />
      </View>

      <View style = {styles.bottom}>
      <Button 
      title = "Sign up"
      onPress = {() => navigation.navigate('Sign up')}
      />
      </View>

      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    paddingTop:100,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontSize:30,
    textAlign: 'center',
    color:'steelblue', 
    fontWeight:'bold'
  },

  Header: {
    color:'steelblue', 
    fontWeight:'bold',
    backgroundColor:'lightblue', 
    padding:18, 
    fontSize:25
},

  bottom: {
  paddingTop:35,
  alignItems: 'center',
  justifyContent: 'center'
},

  main: {
  color:'steelblue', 
  fontWeight:'bold',
  paddingTop:300, 
  fontSize:25
},

  mini: {
  fontSize:15,
  textAlign: 'center',
  color:'steelblue', 
  fontWeight:'bold'
},

  mains: {
  color:'steelblue', 
  fontWeight:'bold',
  paddingTop:20, 
  fontSize:25
},



});

export default HomeScreen;
