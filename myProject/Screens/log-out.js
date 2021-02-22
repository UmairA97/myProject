import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StyleSheet, Button, ToastAndroid} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Logout extends Component{


  logout = async () => {
    

    //const value = await AsyncStorage.getItem('@session_token');
    let value = await AsyncStorage.getItem('@session_token');
    
    return fetch ("http://10.0.2.2:3333/api/1.0.0/user/logout",{
      method: 'post',
      headers:{
       //'Content-Type': 'application/json',
       'X-Authorization': value
      }
    })

    .then((response) => {
      if(response.status === 200){
        console.log('logged out');
        ToastAndroid.show("Log out successful",ToastAndroid.SHORT);
        AsyncStorage.clear();
        this.props.navigation.navigate("Log in");
      }else if(response.status === 401) {

      }else{
        throw 'Error';
      }
   })
 
    .catch((error) => {
      console.log(error);
     ToastAndroid.show(error,ToastAndroid.SHORT);

    })   
 }

    render() {

     const navigation = this.props.navigation;
     
     return (

        <ScrollView>

            <View style ={styles.Header}>
            <Text style = {styles.text}> Log Out </Text>
            </View>

            <View style = {styles.container}>
            <Button color= "#6b8e23"
             title = "Log out"
             onPress = {() => this.logout()} 
             />

            </View>

            <View style = {styles.bottom}>
            <Button color= "#808000"
            title = "Go Back To Home"
            onPress = {() => navigation.navigate('Home')}
            />

            </View>

    


        </ScrollView>
        
      );
    }
  }

  const styles = StyleSheet.create({
  Header: {
    fontWeight:'bold',
    backgroundColor:'saddlebrown', 
    padding:18, 
    fontSize:25
  },

  text: {
    fontSize:25,
    textAlign: 'center',
    color:'burlywood', 
    fontWeight:'bold'
  },
  container: {
    paddingTop:100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottom: {
    paddingTop:35,
    alignItems: 'center',
    justifyContent: 'center'
  },

});

  export default Logout;

  
  /*
      .then(async (responseJson) => {
      console.log(responseJson);
      await AsyncStorage.getItem('@session_token');
      ToastAndroid.show("Log out successful",ToastAndroid.SHORT);
      this.props.navigation.navigate("Log in");
     
    })
    */