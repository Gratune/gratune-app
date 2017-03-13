import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ListView
} from 'react-native';

// var MockData = [
//   {title: 'Larimer Beer Hall', date: 'March 15th', posters: {thumbnail: 'https://static1.squarespace.com/static/56fdb9ca62cd94566a780406/5758d4e037013b849f195e01/5758d4e6b654f920f3bcc644/1465439463904/13239366_1702771109975590_515350590966976783_n.jpg?format=500w'}},
//   {title: 'Herbs', date: 'March 17th', posters: {thumbnail: 'http://denver.thedrinknation.com/images/bars/herbsbardenver.jpg'}},
//   {title: 'Ophelia\'s Soapbox', date: 'March 12th', posters: {thumbnail: 'http://www.heavenbeatbox.com/wp-content/uploads/2016/07/Ophelia-Denver-Selectism-Bites-03.jpg'}},
//   {title: 'Meadowlark', date: 'March 23rd', posters: {thumbnail: 'http://4.bp.blogspot.com/-SWTV1-KRdQ0/Tzqvm7D-rbI/AAAAAAAACLk/X4BKhJdPhzs/s1600/2boyhollow04.jpg'}}
// ]
//
// var data = MockData.map(function(el) {
//   return el
// })

class ListViewBasics extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

export default ListViewBasics
