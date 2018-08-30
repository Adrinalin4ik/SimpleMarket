import React, { Component } from "react";
import {StyleSheet, 
        View, 
        FlatList, 
        Content, 
        Text, 
        TouchableHighlight, 
        ListView,
        ActivityIndicator,
        Image 
} from "react-native";

import ListItem from './list-item.js'
import * as Actions from '../redux_module/actions'; //Import your actions
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ItemGrid extends Component {

  constructor(props){
    super(props)

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: []
    }
  }

  componentDidMount() {
    this.props.getData();
    console.log(this.props)
  }

  render() {
      console.log(this.props)
      if (this.props.loading) {
          return (
              <View style={styles.activityIndicatorContainer}>
                  <ActivityIndicator animating={true}/>
              </View>
          );
      } else {
        return (
          <ListView contentContainerStyle={styles.list}
            dataSource={this.ds.cloneWithRows(this.props.dataSource)}
            renderRow={this.renderRow}
          />
        );
      }
  }

  renderRow(rowData, sectionID, rowID) {
    console.log(this)
    return (
      <TouchableHighlight onPress={() => console.log(this)} underlayColor='rgba(0,0,0,0)'>
        <View>
          <View style={styles.row}>
            <Image style={styles.image} source={{uri:rowData.image}} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _pressRow(data) {
    console.log(data)
  }

}

const styles = StyleSheet.create({
  activityIndicatorContainer:{
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop:20,
    paddingBottom:10
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

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(ItemGrid);
