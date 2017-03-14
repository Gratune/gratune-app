import React, { Component } from 'react';
import {
  ListView,
  RefreshControl,
  Text,
  StyleSheet
} from 'react-native';

import Row from './row'

const MockData = [
  {
    title: 'Larimer Beer Hall',
    address: '2012 Larimer St, Denver, CO 80205',
    date: 'March 15th',
    tagline: 'Beers, Burgers and Booyah. Explore extensive tap list, try craft burgers, or party the night away in the upstairs dance hall.',
    image: 'https://pbs.twimg.com/profile_images/710573088153296898/8LiCMWoI.jpg'
  },
  {
    title: 'Herbs',
    address: '2057 Larimer St, Denver, CO 80205',
    date: 'March 17th',
    tagline: "Low on pretension, high on energy, a no-frills hideout for drinks & dancing to live music.",
    image: 'https://static1.squarespace.com/static/53fe82d2e4b0bf4d2831a73b/t/5686e80fd8af102bf3d6f15f/1451681809585/AOA3825w.jpg?format=1500w'
  },
  {
    title: 'Ophelia\'s Soapbox',
    address: '1215 20th St, Denver, CO 80202',
    date: 'March 12th',
    tagline: 'Huge, multilevel "gastro-brothel" with live music & a restaurant offering eclectic American food.',
    image: 'http://soulsticeradio.com/soul/wp-content/uploads/2016/02/DH-HBB-03-e1455489897680-450x450.jpg'
  },
  {
    title: 'Meadowlark Lounge',
    address: '2701 Larimer St, Denver, CO 80205',
    date: 'March 23rd',
    tagline: 'Both a cozy, art-lined basement bar & sunny patio host indie bands & DJs as well as a happy hour.',
    image: 'http://4.bp.blogspot.com/-SWTV1-KRdQ0/Tzqvm7D-rbI/AAAAAAAACLk/X4BKhJdPhzs/s1600/2boyhollow04.jpg'
  }
]

export default class List extends Component {

  /**
   * Store the data for ListView
   */
  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),

    isRefreshing: false,
  }

  componentDidMount() {
    this._fetchData()
  }

  _fetchData = () => {
    this.setState({ isRefreshing: true })
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(MockData),
      isRefreshing: false,
    })
  }

  _renderRow = (venue) => {
    return (
      <Row
       // Pass movie object
       venue={venue}
       // Pass a function to handle row presses
       onPress={()=>{
         // Navigate to a separate movie detail screen
         this.props.navigator.push({
           name: 'venue',
           venue: venue,
         });
       }}
     />
    )
  }

  render() {
    return (
      <ListView
        contentContaineStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._fetchData}
          />
        }
      />
    )
  }

}

var styles = StyleSheet.create({
  list: {
    flex: 1,
  }
})
