import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {View, TextInput, Text, Alert, StyleSheet, TouchableOpacity} from 'react-native'



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

  login = (login) => {
     
   Alert.alert(
     this.state.email,
     this.state.password
     )
    
  }
  
  
  signup= (signup) => {
  
    this.signup
     
   }
   

  render() {
    return (
      <View>
       
        <Text style = {styles.Header}> Coffida </Text>

        <View style = {styles.Form}></View>
        <TextInput style = {styles.Text}  placeholder = "Email..." onChangeText = {this.handleEmail} value={this.state.email} />
        
        <View style = {styles.Form}></View>
        <TextInput style = {styles.Text} placeholder = "Password..." onChangeText = {this.handlePassword} value={this.state.password} secureTextEntry={true} />

        
        <TouchableOpacity style = {styles.Button} onPress = {this.login} TouchableOpacity>
          <Text style = {styles.Login}>LOG IN</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.Button} onPress TouchableOpacity>
          <Text style = {styles.Login}>SIGN UP</Text>
          </TouchableOpacity>

      </View>
      

    );
  }
}

const styles = StyleSheet.create({
  Header: {
      color:'steelblue', 
      fontWeight:'bold',
      backgroundColor:'lightblue', 
      padding:20, 
      fontSize:25
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
    backgroundColor: 'lightblue',
    padding:10,
    width: "80%", 
    margin: 40,
    alignItems: 'center'
  
  },

  Login: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'steelblue'
  },

  Form : {
    padding:5
  }

  })



export default Login;