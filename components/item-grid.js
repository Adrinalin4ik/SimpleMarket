import React, { Component } from "react";
import {StyleSheet,
        View,
        FlatList,
        Content,
        Text,
        TouchableHighlight,
        ListView,
        Image } from "react-native";
import ListItem from './list-item.js'

export default class ItemGrid extends Component {

  constructor(props){
    super(props)

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: this.ds.cloneWithRows([
        {text:"fdsfds", image:"https://www.w3schools.com/w3css/img_lights.jpg"},
        {text:"fdsfds", image:"https://www.w3schools.com/w3css/img_lights.jpg"},
        {text:"fdsfds", image:"https://www.w3schools.com/w3css/img_lights.jpg"},
        {text:"fdsfds", image:"https://www.w3schools.com/w3css/img_lights.jpg"},
        {text:"fdsfds", image:"https://www.w3schools.com/w3css/img_lights.jpg"},
        {text:"fdsfds", image:"https://www.w3schools.com/w3css/img_lights.jpg"},
        {text:"fdsfds", image:"https://www.w3schools.com/w3css/img_lights.jpg"}
        ])
    }
  }

  render() {
    return (
      <ListView contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  }

  _renderRow(rowData: string, sectionID: number, rowID: number) {
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)} underlayColor='rgba(0,0,0,0)'>
        <View>
          <View style={styles.row}>
            <Image style={styles.image} source={{uri:rowData.image}} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _pressRow(rowID: number) {
    console.log("ROW", rowID)
  }

}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:30,
  },
  row: {
    justifyContent: 'center',
    margin: 8,
    width: 160,
    height: 160,
    backgroundColor: 'red',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 5,

  },
});
