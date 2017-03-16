import React, { Component } from 'react'
import {PropTypes} from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView
} from "react-native";
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import Venues from './Venues'

const contextTypes = {
  drawer: React.PropTypes.object,
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#30323D',
  },
  concertContainer: {
    backgroundColor: '#CDD1C4',
    width: 350,
    borderRadius: 5,
    marginBottom: 64
  },
  heading1: {
    fontSize: 24,
    paddingTop: 10,
    paddingBottom:10,
    color: '#CDD1C4'
  }
});


class Schedule extends Component {
  constructor(props) {
    super(props)
    const getRowData = (dataBlob, rowId) => dataBlob[`${rowId}`];

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(demoData)
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading1}>Full Schedule</Text>

        <Venues />
      </View>

    );
  }
}

Schedule.contextTypes = contextTypes;
Schedule.propTypes = propTypes;

export default Schedule;
