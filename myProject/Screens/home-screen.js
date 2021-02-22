import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

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
      <Text style = {styles.texts}> Welcome</Text>
      </View>

      <View style = {styles.mains}>
      <Text style = {styles.mini}> Your one stop place for a coffee fix!</Text>
      </View>

      <View style = {styles.container}>
      <Button color= "#6b8e23"
      title = "Log in"
      onPress = {() => navigation.navigate('Log in')}
      />
      </View>

      <View style = {styles.bottom}>
      <Button color= "#808000"
      title = "Sign up"
      onPress = {() => navigation.navigate('Sign up')}
      />
      </View>

      <View>

      <Image source={{uri: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_938993594_401542.jpg'}}  
       style={{width: 300, height: 200, bottom: 550, left:45}} />  

      </View>


      </ScrollView>
    );
  }
}

//#6b8e23

const styles = StyleSheet.create({
  container: {
    paddingTop:100,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontSize:30,
    textAlign: 'center',
    color:'burlywood', 
    fontWeight:'bold'
  },

  texts:{
    fontSize:30,
    textAlign: 'center',
    color:'saddlebrown', 
    fontWeight:'bold'
  },

  Header: {

    fontWeight:'bold',
    backgroundColor:'saddlebrown', 
    padding:18, 
    fontSize:25
},

  bottom: {
  paddingTop:35,
  alignItems: 'center',
  justifyContent: 'center'
},

  main: {
  fontWeight:'bold',
  paddingTop:300, 
  fontSize:25
},

  mini: {
  fontSize:15,
  textAlign: 'center',
  color:'peru', 
  fontWeight:'bold'
},

  mains: { 
  fontWeight:'bold',
  paddingTop:20, 
  fontSize:25
},

});

export default HomeScreen;
