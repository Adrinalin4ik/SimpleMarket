import React, { Component, Content, FlatList, Text, TouchableOpacity } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import ListItem from './components/list-item.js'
import ItemGrid from './components/item-grid.js'


export default class App extends Component {

  render() {
    return (
      <View>
        <ItemGrid/>
      </View>
      );
  }
}


const styles = StyleSheet.create({
  border:{
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'white',
  }
});
