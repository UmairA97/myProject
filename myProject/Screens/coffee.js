import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image, ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';


class Update extends Component{
  constructor(props){
    super(props);
  
  this.state = {
    isLoading: true,
    reviews:[],
    review_body:'',
    overall_rating: 0,
    price_rating:0,
    quality_rating:0,
    clenliness_rating:0,
   };
  }

  componentDidMount(){
    this.getReview();
}

getReview = async () => {

let id = await AsyncStorage.getItem('@user_id');
let value = await AsyncStorage.getItem('@session_token');

return fetch("http://10.0.2.2:3333/api/1.0.0/user/" + id,{
  method: 'get',
  headers:{
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

  this.setState({"reviews": responseJson.reviews})
 
  //console.log(this.state);
})

.catch((error) => {
  console.log(error);
  ToastAndroid.show(error,ToastAndroid.SHORT);
})

}

render(){
  const navigation = this.props.navigation;
  return (
  <View>
           
  <View style ={styles.Header}>
  <Text style = {styles.text}> Edit and Delete Reviews </Text>
  </View>

  <View>

<Text style = {styles.review}>
  Click the review id to write a edit a review!
</Text>
</View>

  <FlatList style = {{height: '85%', padding: 5}}
  data = {this.state.reviews}
  renderItem = {
    ({item}) =>(

  <View>

  <Text style = {styles.Texts} onPress = {() => navigation.navigate('Update Reviews',{review_id:item.review.review_id, location_id:item.location.location_id})}>
    REVIEW ID: {item.review.review_id}
  </Text>

  <Text style = {styles.Texts}>
    Overall Rating: {item.review.overall_rating}
  </Text>

  <Text style = {styles.Texts}>
    Price Rating: {item.review.price_rating}
  </Text>

  <Text style = {styles.Texts}>
    Quality Rating: {item.review.quality_rating}
  </Text>

  <Text style = {styles.Texts}>
    Clenliness Rating: {item.review.clenliness_rating}
  </Text>

  <Text style = {styles.Texts}>
    Review Body: {item.review.review_body}
  </Text>
  <Text>

  </Text>

  </View>
  
  
  )}
    
    keyExtractor = {(item)=> item.review.review_id.toString()}
    />
    

  </View>
  )}
}



export default Update;



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
  fontSize: 15,
  fontWeight: 'bold',
  color: 'white'
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
},

Texts: {
  fontSize:15,
  color:'burlywood', 
  fontWeight:'bold'
},

review: {
  fontSize:15,
  color:'black', 
  fontWeight:'bold',
  textAlign: 'center',
},

});

