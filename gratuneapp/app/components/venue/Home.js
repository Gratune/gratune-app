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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#30323D',
  },
  concertContainer: {
    marginTop: 55,
    backgroundColor: 'white',
    width: 350,
    borderRadius: 5
  }
});


class Home extends Component {
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
        <Text>Component Home</Text>

        <ListView
          contentContainerStyle={styles.concertContainer}
          dataSource={this.state.dataSource}
          renderRow={(data) => <Row {...data} />}
        />
      </View>

    );
  }
}






Home.contextTypes = contextTypes;
Home.propTypes = propTypes;

export default Home;
