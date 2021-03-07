import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StyleSheet,ToastAndroid, FlatList, Image, Linking} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



class Location extends Component{
  constructor(props){
    super(props);
  
  this.state = {
    isLoading: true,
    locationData:[]
   };
  }


  getLocationData = async () =>{
    let value = await AsyncStorage.getItem('@session_token');
    return fetch("http://10.0.2.2:3333/api/1.0.0/find", {

    method: 'get',
    headers : {
      'X-Authorization': value
    }
    })

    .then((response) => {
      if(response.status === 200) {
        console.log('success')
        return response.json();
      }else if(response.status === 404){
        throw 'not found';
      }
    })

    .then(async (responseJson) =>{
      this.setState({"locationData": responseJson})
      console.log(this.state.locationData);
    })

    .catch((error) =>{
      console.log(error);
      ToastAndroid.show(error, ToastAndroid.SHORT);
    })
  }

  componentDidMount(){
    this.getLocationData();
  }

  render(){
    const navigation = this.props.navigation;
    return (
    
  
      <View>
           
        <View style ={styles.Header}>
        <Text style = {styles.text}> All Locations </Text>
        </View>

        <View>

        <Text style = {styles.review}>
          Click the store name to write a review!
        </Text>
        </View>

        <FlatList style = {{height: '85%', padding: 5}}
        data = {this.state.locationData}
        renderItem = {
          ({item}) =>(

        <View>
        
        <Text style = {styles.Form} onPress = {() => navigation.navigate('Reviews',{location_id:item.location_id})}>
          {item.location_name}
        </Text>
  
        <Text style = {styles.Texts}>
          Located: {item.location_town}
        </Text>
        <Text style = {styles.Texts}>
          Average Rating: {item.avg_overall_rating}
        </Text>
        <Text style = {styles.Texts}>
          Average Price Rating: {item.avg_price_rating}
        </Text>
        <Text style = {styles.Texts}>
          Average Quality Rating: {item.avg_quality_rating}
        </Text>
        <Text style = {styles.Texts}>
          Average Clenliness Rating: {item.avg_clenliness_rating}
        </Text>
        </View>
        
        
        )}
          
          keyExtractor = {(item)=> item.location_id.toString()}
          />
          

        </View>

    );
  }
  }

export default Location;

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
    padding:15,
    fontSize:20,
    color:'saddlebrown', 
    fontWeight:'bold'
  },

  Texts: {
    fontSize:15,
    color:'burlywood', 
    fontWeight:'bold'
  },

  Title: {
    fontSize:15, 
    fontWeight:'bold'
  },

  review: {
    fontSize:15,
    color:'black', 
    fontWeight:'bold',
    textAlign: 'center',
  },


  });     


 