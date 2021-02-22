import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity} from 'react-native';


class Coffee extends Component{
  constructor(props){
    super(props);
  
  this.state = {
    isLoading: true,
    locationData:[],
    location_id: ''
   };
  }

  componentDidMount(){
    this.getData();
  }


 getData(){
   console.log("getting data..");
  return fetch("http://10.0.2.2:3333/api/1.0.0/location/2")
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);

      this.setState({
        isLoading: false,
        locationData: responseJson,
      });

    })
    .catch((error) =>{
      console.log(error);
    });
}

render(){
  return (

    <View>
         
      <View style ={styles.Header}>
      <Text style = {styles.text}> Location Info </Text>
      </View>

      <View style = {styles.Form}></View>
      <TextInput style = {styles.Text}  placeholder = "Location ID.." onChangeText = {(location_id) => this.setState({location_id})} value={this.state.location_id} />

      <TouchableOpacity style = {styles.Button} 
           onPress = {() => this.getData()} 

           TouchableOpacity>
          <Text style = {styles.Login}>Get Location Info</Text>
          </TouchableOpacity>

    
      </View>
  );
}
}

export default Coffee;



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

});

/*
      <View>
        <FlatList
          data={this.state.locationData}
          renderItem={({location}) => <Text>{location.location_name}</Text>}
          keyExtractor={(location,index) => location.id}
        />
      </View>
      */