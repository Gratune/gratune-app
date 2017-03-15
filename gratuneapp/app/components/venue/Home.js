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
import Row from './Row';
import demoData from '../../sampledata/venue.js'

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
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#30323D',
  },
  concertContainer: {
    backgroundColor: '#CDD1C4',
    width: 350,
    borderRadius: 5,
  },
  heading1: {
    fontSize: 24,
    paddingTop: 10,
    paddingBottom:10,
    color: '#CDD1C4'
  }
});


class Home extends Component {
  constructor(props) {
    super(props)
    const getRowData = (dataBlob, rowId) => dataBlob[`${rowId}`];

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    const upcoming = [];

    for (let i = 0; i < 3; i++) {
      let record = demoData[i];
      upcoming.push(record);
    }

    this.state = {
      dataSource: ds.cloneWithRows(upcoming)
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading1}>Upcoming Shows</Text>
        <View style={{height:200}}>
          <ListView
            contentContainerStyle={styles.concertContainer}
            dataSource={this.state.dataSource}
            renderRow={(data) => <Row {...data} />}
          />
        </View>
        <Text style={styles.heading1}>Stats</Text>
        <View style={{height:200}}>
        </View>
      </View>

    );
  }
}

Home.contextTypes = contextTypes;
Home.propTypes = propTypes;

export default Home;
