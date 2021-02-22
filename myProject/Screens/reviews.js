import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ScrollView, TextInput, TouchableOpacity, ToastAndroid} from 'react-native-gesture-handler';

// reviews : quality, price, cleanliness, short text
// users can like other people reviews

class Reviews extends Component{



   constructor(props) {
    super(props);

    this.state = {
      isLoding: true,
      overall_rating : '',
      price_rating : '',
      quailty_rating: '',
      clenliness_rating: '',
      review_body:'',
    }
  
    };

    review = async () => {
    

      //let id = await AsyncStorage.getItem('@user_id');
      let value = await AsyncStorage.getItem('@session_token');
      
      return fetch ("http://10.0.2.2:3333/api/1.0.0/user/location/2/review",{
        method: 'post',
        headers:{
  
         'Content-Type': 'application/json',
         'X-Authorization': value
        }
      })

      .then((response) => {
     
        if(response.status === 200){
          return response.json()
        }
        else if(response.status === 400){
          throw 'Can not write review';
        }
        else{
          throw 'Something went Wrong';
        }
      })


      .then((response) => {
        Alert.alert("Review Added!");
      })
  

      .catch((error) => {
        console.log(error);
      })   
   }

  

    render() {

     const navigation = this.props.navigation;
     
     return (

        <ScrollView>

            <View style ={styles.Header}>
            <Text style = {styles.text}> Reviews </Text>
            </View>

<View style = {styles.Form}></View>
<TextInput style = {styles.Text}  placeholder = "Overal rating out of 5..." onChangeText = {(overall_rating) => this.setState({overall_rating})} value={this.state.overall_rating} />

<View style = {styles.Form}></View>
<TextInput style = {styles.Text} placeholder = "Price rating out of 5..." onChangeText = {(price_rating) => this.setState({price_rating})} value={this.state.price_rating} />

<View style = {styles.Form}></View>
<TextInput style = {styles.Text} placeholder = "Quality rating out of 5..." onChangeText = {(quailty_rating) => this.setState({quailty_rating})} value={this.state.quailty_rating} />

<View style = {styles.Form}></View>
<TextInput style = {styles.Text} placeholder = "Clenliness rating out of 5..." onChangeText = {(clenliness_rating) => this.setState({clenliness_rating})} value={this.state.clenliness_rating} />

<View style = {styles.Form}></View>
<TextInput style = {styles.Text} placeholder = "Short Review..." onChangeText = {(review_body) => this.setState({review_body})} value={this.state.review_body} />


<TouchableOpacity style = {styles.Button} 
onPress = {() => this.review()} 

TouchableOpacity>
  <Text style = {styles.Login}>Post Review</Text>
  </TouchableOpacity>

        
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
    padding:2
  },

});

  export default Reviews;

