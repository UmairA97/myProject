import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

// reviews : quality, price, cleanliness, short text
// users can like other people reviews

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

});

  export default Reviews;