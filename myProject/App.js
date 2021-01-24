import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HelloWorldApp extends Component{
  render(){

    let name = "umair";

    return(
      <View>
      <SayHello name="bob" />
      <SayHello name="umair" />

      </View>
    );
    
  }

}

class SayHello extends Component {
  render(){
    return (
      <View>
        <Text>Hello {this.props.name}</Text>
      </View>
    )
  };
}


export default HelloWorldApp;