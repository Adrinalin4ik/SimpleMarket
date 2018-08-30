import React, { Component, Content, FlatList, Text, TouchableOpacity } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import ItemGrid from './components/item-grid.js'
import store from './redux_module/store'; //Import the store
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ItemGrid/>
      </Provider>
    );
  }
}