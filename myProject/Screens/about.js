import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

class About extends Component{

    render() {

     const navigation = this.props.navigation;
     
     return (

        <ScrollView>

            <View style ={styles.Header}>
            <Text style = {styles.text}> About Us </Text>
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

  export default About;