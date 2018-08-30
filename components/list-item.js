import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ListItem extends Component {
  render() {
    const { data } = this.props;

    return (
      <View style={[styles.box, styles.border]}></View>
    );
  }
}

const styles = StyleSheet.create({
  border:{
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'white',
  },
  box:{
    backgroundColor: 'green'
  }
});
