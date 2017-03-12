import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ListView
} from 'react-native';

var MockData = [
  {title: 'Larimer Beer Hall', date: 'March 15th', posters: {thumbnail: 'https://static1.squarespace.com/static/56fdb9ca62cd94566a780406/5758d4e037013b849f195e01/5758d4e6b654f920f3bcc644/1465439463904/13239366_1702771109975590_515350590966976783_n.jpg?format=500w'}},
  {title: 'Herbs', date: 'March 17th', posters: {thumbnail: 'http://denver.thedrinknation.com/images/bars/herbsbardenver.jpg'}},
  {title: 'Ophelia\'s Soapbox', date: 'March 12th', posters: {thumbnail: 'http://www.heavenbeatbox.com/wp-content/uploads/2016/07/Ophelia-Denver-Selectism-Bites-03.jpg'}},
  {title: 'Meadowlark', date: 'March 23rd', posters: {thumbnail: 'http://4.bp.blogspot.com/-SWTV1-KRdQ0/Tzqvm7D-rbI/AAAAAAAACLk/X4BKhJdPhzs/s1600/2boyhollow04.jpg'}}
]

// class ViewResults extends Component {
//
//   constructor(props) {
//     super(props)
//     var dataSource = new ListView.DataSource(
//       {rowHasChanged: (r1, r2) => r1.lister_url !== r2.lister_url}
//     )
//     this.state = {
//       dataSource: dataSource.cloneWithRows(this.props.listings)
//     }
//   }



  // renderRow(rowData, sectionID, rowID) {
  //   return (
  //     <TouchableHighlight onPress={() => this.rowPressed(rowData.lister_url)}
  //         underlayColor = '#dddddd'>
  //       <View>
  //         <View style={styles.rowContainer}>
  //           <Image style={styles.thumb} source={{ url: rowData.img_url }} />
  //           <View style={styles.textContainer}>
  //             <Text style={styles.price}>{price}</Text>
  //             <Text style={styles.title}
  //                   numberOfLines={1}>{rowData.title}</Text>
  //         <Text>{rowData.title}</Text>
  //       </View>
  //     </TouchableHighlight>
  //   )
  // }

  render() {
    var bars = MockData.map(function(bar) {

    })
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    )
  }

}


var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

export default ViewResults;
