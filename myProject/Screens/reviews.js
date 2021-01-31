import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

// reviews : quality, price, cleanliness) 

class Reviews extends Component{

    render() {

     const navigation = this.props.navigation;
     
     return (

        <ScrollView>

            <View style ={styles.Header}>
            <Text style = {styles.text}> Reviews </Text>
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
    padding:18, 
    fontSize:25
  },

  text: {
    fontSize:25,
    textAlign: 'center',
    color:'steelblue', 
    fontWeight:'bold'
  },

});

  export default Reviews;