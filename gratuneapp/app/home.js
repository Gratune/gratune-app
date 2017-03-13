import React, { Component } from 'react';
const {
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  View,
  Image,
  Text,
  ListView,
} = require('react-native');

import { Actions } from 'react-native-router-flux';

import Row from './Row'
import Header from './Header'
import Footer from './Footer'
import demoData from './demoData'

export default class Home extends Component {
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
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(data) => <Row {...data} />}
          renderFooter={() => <Footer />}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});
