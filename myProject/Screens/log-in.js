import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {View, TextInput, Text, Alert, StyleSheet, TouchableOpacity, Button} from 'react-native'

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

  login = (login) => {
     
   Alert.alert(
     this.state.email,
     this.state.password
     )
    
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

        
        <TouchableOpacity style = {styles.Button} onPress = {this.login} TouchableOpacity>
          <Text style = {styles.Login}>LOG IN</Text>
          </TouchableOpacity>

          <View  style = {styles.Back}>
            <Button
            title = "Go back"
           onPress = {() => navigation.goBack()}
      />
      </View>

      </ScrollView>
      

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
  },

  Back: {
    width: "80%", 
    margin: 40,
    alignItems: 'center'
  
  },


});

export default Login;