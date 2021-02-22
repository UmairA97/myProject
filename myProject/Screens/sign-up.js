import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {View, TextInput, Text, StyleSheet, TouchableOpacity,ToastAndroid } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';



class Signup extends Component{
  constructor(props){
    super(props);

   //post request for user
  this.state = {

    isLoading: true,
    first_name: '',
    last_name:'',
    email: '',
    password: ''

   };
   
  }

signup = (signup) => {
  
     return fetch ("http://10.0.2.2:3333/api/1.0.0/user",{
       method: 'post',
       headers:{

        'Content-Type': 'application/json'
       },
       
       body: JSON.stringify(this.state)
       
     })

     .then((response) => {
       
       if(response.status === 201){
         return response.json()
       }
       else if(response.status === 400){
         throw 'Failed Validation';
       }
       else{
         throw 'Something went Wrong';
       }
       })

       .then((responseJson) => {
       console.log("User created with ID: ", responseJson);
       ToastAndroid.show("Account Created",ToastAndroid.SHORT);
       this.props.navigation.navigate("Log in");
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
       
        <Text style = {styles.Header}> Sign Up </Text>

        <View style = {styles.Form}></View>
        <TextInput style = {styles.Text}  placeholder = "First Name" onChangeText = {(first_name) => this.setState({first_name})} value={this.state.first_name} />
        
        <View style = {styles.Form}></View>
        <TextInput style = {styles.Text} placeholder = "Last Name" onChangeText = {(last_name) => this.setState({last_name})} value={this.state.last_name} />

        <View style = {styles.Form}></View>
        <TextInput style = {styles.Text} placeholder = "Email" onChangeText = {(email) => this.setState({email})} value={this.state.email} />

        <View style = {styles.Form}></View>
        <TextInput style = {styles.Text} placeholder = "Password" onChangeText = {(password) => this.setState({password})} value={this.state.password} secureTextEntry={true} />

        
        <TouchableOpacity style = {styles.Button} 
        onPress = {() => this.signup()} 
       
        TouchableOpacity>
          <Text style = {styles.Login}>Create Account</Text>
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

export default Signup;