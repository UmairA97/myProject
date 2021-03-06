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
      isLoading: true,
      review_body:'',
      overall_rating: 1,
      price_rating:1,
      quality_rating:1,
      clenliness_rating:1
    }
  
    };

    review = async () => {
    

      //let id = await AsyncStorage.getItem('@user_id');
      let id = this.props.route.params.location_id;
      let value = await AsyncStorage.getItem('@session_token');
      
      return fetch ("http://10.0.2.2:3333/api/1.0.0/location/" + id + '/review',{
        method: 'post',
        headers:{
  
         'Content-Type': 'application/json',
         'X-Authorization': value
        },
        body: JSON.stringify({
          "overall_rating": parseInt(this.state.overall_rating),
          "price_rating": parseInt(this.state.price_rating),
          "quality_rating": parseInt(this.state.quality_rating),
          "clenliness_rating": parseInt(this.state.clenliness_rating),
          "review_body": this.state.review_body
        })
      })


      .then((response) => {
     
        if(response.status === 201){
          alert("Review Added!");
        }
        else if(response.status === 400){
          throw 'Can not write review';
        }
        else{
          throw 'Something went Wrong';
        }
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
<TextInput style = {styles.Text} placeholder = "Quality rating out of 5..." onChangeText = {(quality_rating) => this.setState({quality_rating})} value={this.state.quality_rating} />

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

