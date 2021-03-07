import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {View, TextInput, Text, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ScrollView } from 'react-native-gesture-handler';

class Login extends Component{
  constructor(props){
    super(props);
  
  this.state = {
    email: '',
    password: '',
   }
  }

  handleEmail = (email) => {
//do some validation
    this.setState({email:email})

  }

  handlePassword = (password) => {
//do some validation
    this.setState({password:password})
  }


  login = async () => {

    return fetch ("http://10.0.2.2:3333/api/1.0.0/user/login",{
      method: 'post',
      headers:{

       'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
      //to_send
    })

    .then((response) => {
     
      if(response.status === 200){
        return response.json()
      }
      else if(response.status === 400){
        throw 'Invalid email or password';
      }
      else{
        throw 'Something went Wrong';
      }
      

    })

    .then(async (responseJson) => {
      console.log(responseJson);
      await AsyncStorage.setItem('@session_token',responseJson.token);
      await AsyncStorage.setItem('@user_id',JSON.stringify (responseJson.id));
      console.log(await AsyncStorage.getItem('@session_token'));
      this.props.navigation.navigate("Location Info");
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
       
        <Text style = {styles.Header}> Log In </Text>

        <View style = {styles.Form}></View>
        <TextInput style = {styles.Text}  placeholder = "Email..." onChangeText = {this.handleEmail} value={this.state.email} />
        
        <View style = {styles.Form}></View>
        <TextInput style = {styles.Text} placeholder = "Password..." onChangeText = {this.handlePassword} value={this.state.password} secureTextEntry={true} />

        
        <TouchableOpacity style = {styles.Button} 
        onPress = {() => this.login()}

       // onPress = {this.login} 
        TouchableOpacity>
          <Text style = {styles.Login}>LOG IN</Text>
          </TouchableOpacity>

      </ScrollView>
      

    );
  }
}

const styles = StyleSheet.create({
  Header: {
      color:'burlywood', 
      fontWeight:'bold',
      backgroundColor:'saddlebrown', 
      padding:20, 
      fontSize:25,
      textAlign: 'center'
  },

  Text: {
    width:"90%",
    margin:20,
    top: 20,
    borderWidth:0.5,
    borderRadius:2,
    padding:10
  },

  Button: {
    backgroundColor: 'burlywood',
    padding:10,
    width: "80%", 
    margin: 40,
    alignItems: 'center'
  
  },

  Login: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },

  Form : {
    padding:5
  },

  Back: {
    width: "80%", 
    margin: 40,
    alignItems: 'center'
  
  },


});

export default Login;