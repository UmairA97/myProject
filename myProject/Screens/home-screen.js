import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


class HomeScreen extends Component{

static navigationOptions = {
  header:null
}

  render() {
    
   const navigation = this.props.navigation;

    return ( 
 
      <View style = {styles.container}>
      <Text style = {styles.text}> Home </Text>
      
      <Button 
      title = "Log in"
      onPress = {() => navigation.navigate('Log in')}
      />

      <Button 
      title = "Sign up"
      onPress = {() => navigation.navigate('Sign up')}
      />

      

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontSize:25
  }

});

export default HomeScreen;
