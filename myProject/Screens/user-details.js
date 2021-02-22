import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, TextInput, ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class User extends Component{
    constructor(props){
        super(props);
      
      this.state = {
        isLoading: true,
        //userData:[],
        first_name: '',
        last_name:'',
        email:'',
        password:'',
       };

      }

      componentDidMount(){
        this.getData();
    }

    getData = async () => {

    let id = await AsyncStorage.getItem('@user_id');
    let value = await AsyncStorage.getItem('@session_token');

    return fetch("http://10.0.2.2:3333/api/1.0.0/user/" + id,{
      method: 'get',
      headers:{
       'Content-Type': 'application/json',
       'X-Authorization': value
      }
    })


.then((response) => {
  if(response.status === 200){
    return response.json()
  }else{
    throw 'Something went wrong';
  }
})

    .then(async (responseJson) => {

      this.setState({"first_name": responseJson.first_name})
      this.setState({"last_name": responseJson.last_name})
      this.setState({"email": responseJson.email})
      //console.log(this.state);
    })


    .catch((error) => {
        console.log(error);
        ToastAndroid.show(error,ToastAndroid.SHORT);
    })
  }



  
  update = async () => {
  let id = await AsyncStorage.getItem('@user_id');
  let value = await AsyncStorage.getItem('@session_token');
  if ((this.state.first_name === ''))
  {
    ToastAndroid.show('Not Valid',ToastAndroid.SHORT);
  }
  else if ((this.state.last_name === ''))
  {
    ToastAndroid.show('Not Valid',ToastAndroid.SHORT);
  }
  else if((this.state.email === ''))
  {
    ToastAndroid.show('Not Valid',ToastAndroid.SHORT);
  }
  else{

    return fetch("http://10.0.2.2:3333/api/1.0.0/user/" + id,{
      method: 'patch',
      headers:{
       'Content-Type': 'application/json',
       'X-Authorization': value
      },
      body: JSON.stringify(this.state)
    })

    .then((response) => {
      if(response.status === 200){
        console.log("updated");
      }else{
        throw 'Something went wrong';
      }
    })   
  }}

      render() {
         
        return (
   
          <View>
   
            <View style ={styles.Header}>
            <Text style = {styles.text}> User Details </Text>
            </View>

            <View style = {styles.Form}></View>
            <TextInput style = {styles.Text}  placeholder = "First Name" onChangeText = {(first_name) => this.setState({first_name})} value={this.state.first_name} />
        
            <View style = {styles.Form}></View>
            <TextInput style = {styles.Text} placeholder = "Last Name" onChangeText = {(last_name) => this.setState({last_name})}  value={this.state.last_name} />

           <View style = {styles.Form}></View>
           <TextInput style = {styles.Text} placeholder = "Email" onChangeText = {(email) => this.setState({email})}  value={this.state.email} />

           
           <View style = {styles.Form}></View>
           <TextInput style = {styles.Text} placeholder = "Password" onChangeText = {(password) => this.setState({password})} value={this.state.password} secureTextEntry={true} />

           <TouchableOpacity style = {styles.Button} 
           onPress = {() => this.update()} 

           TouchableOpacity>
          <Text style = {styles.Login}>Update Information</Text>
          </TouchableOpacity>
          
          </View>
           
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

     Form : {
      padding:5
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
    }
   
   });
   
export default User;
