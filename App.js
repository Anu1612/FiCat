import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

const Expenses = {
  name: 'Expenses',
  properties: {
    HouseRent: {type:'int', default:0},
  }
}

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
     <View style={{padding: 10}}>
       <TextInput
          style={{height: 40}}
          placeholder="Enter House Rent"
          onChangeText={(text) => this.setState({text})}
        />
        <Button onPress={onPressEnter} title = 'Enter'/>
        <Text>{this.state.text}</Text>
        <Button onPress={showDataBase} title = 'Show'/>
     </View>
    );
  }
}
onPressEnter = ()=>{
}

showDataBase = ()=>{
  console.log('show')
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
