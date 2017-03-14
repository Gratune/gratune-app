import React, { Component } from 'react'
import {
  ListView,
  RefreshControl,
  Text
} from 'react-native'

import ListRow from './ListRow'

const VenueData = [
  {
    name: 'DazzleJazz',
    address: '930 Lincoln St, Denver, CO 80203',
    time: 'Tuesday, March 21st, 9:00PM',
    event: "'Jazz Jam' Hosted by Todd Reid",
    smallImg: 'http://images1.westword.com/imager/dazzle-restaurant-and-lounge/u/745x420/5161512/8698365.0.jpg',
    largeImg: 'http://myweb.usf.edu/~npike/dan/dan6.jpg',
    summary: "Denver's top jazz club, fostering live jazz and more. With a full bar, dinner, Sunday brunch, Friday lunch and a full menu, DazzleJazz is the best nightly."
  },
  {
    name: 'Nocturne',
    address: '1330 27th St, Denver, CO 80205',
    time: 'Saturday, March 25th, 11:00PM - 12:30AM',
    event: "Late Night Set: Mark Diamond Duo",
    smallImg: 'https://cdn0.vox-cdn.com/thumbor/bhFku8-Rq3Rnrk5KDrqp2J2on4o=/898x600/cdn0.vox-cdn.com/uploads/chorus_asset/file/3482680/Nocturne_2.0.jpg',
    largeImg: 'https://s3-media1.fl.yelpcdn.com/bphoto/02dUh6MWmCvzrWeuO6iPzA/o.jpg',
    summary: "More than just jazz and a proper cocktail, Nocturne explores how the arts of food and music can be combined. From lighter 'sound bites' like seasonal bruschetta and duck croquettes to a full five course chef's tasting menu, this restaurant has something to appease all appetites."
  },
  {
    name: 'Ophelia\'s Electric Soapbox',
    address: '1215 20th St, Denver, CO 80202',
    time: 'Tuesday, March 21st, 7:00PM',
    event: 'Ophelia\'s Open Mic With Soul Daddy and His Band',
    smallImg: 'http://static.highsnobiety.com/wp-content/uploads/selectism/2015/07/Ophelia-Denver-Selectism-Bites-03.jpg',
    largeImg: "https://i.ytimg.com/vi/nRJQP2uhi2E/maxresdefault.jpg",
    summary: "Herb's is a musician owned and run venue with a passion for great live music and is known for kicking out some of the hippest cocktails around. You will see some of the hottest bands and some of the most incredible untapped talent Denver has to offer."
  },
  {
    name: 'Herbs',
    address: '500 16th St #320, Denver, CO 80202',
    time: 'Sunday, March 19th, 9:30PM - 1:30AM',
    event: 'Alive On Arrival',
    smallImg: 'https://static1.squarespace.com/static/53fe82d2e4b0bf4d2831a73b/t/5686e80fd8af102bf3d6f15f/1451681809585/AOA3825w.jpg?format=1500w',
    largeImg: "http://nicolenichols.com/blog/wp-content/uploads/2016/03/Denver-Music-Photographer-4.jpg",
    summary: "Herb's is a musician owned and run venue with a passion for great live music and is known for kicking out some of the hippest cocktails around. You will see some of the hottest bands and some of the most incredible untapped talent Denver has to offer."
  },
  {
    name: 'Jazz At Jacks',
    address: '500 16th St #320, Denver, CO 80202',
    time: 'Friday, March 17th, 5:30PM - 8:30PM',
    event: 'Happy Hour with Buckner Funken\'',
    smallImg: 'http://www.milehighhappyhour.com/wp-content/uploads/2014/02/Jazz-At-Jacks2-1000x500.jpg',
    largeImg: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/03/3a/a3/dotsero-jazz-jack-s.jpg',
    summary: "You can find a lot more than jazz going on down at Jack’s. Every night you can catch the best funk, blues, oldies, reggae, and tribute shows Denver has to offer - all right here at Jazz@Jack’s! Whether you’re looking to heat it up and get down or just kick back, Jack’s has got something for you. Always cool. Always live."
  }
]

export default class VenueList extends Component {

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
      dataSource: this.state.dataSource.cloneWithRows(VenueData),
      isRefreshing: false,
    })
  }

  _renderRow = (venue) => {
    return (
      <ListRow
        venue={venue}
        onPress={() => {
          this.props.navigator.push({
            name: 'venue',
            venue: venue,
          })
        }}
      />
    )
  }

  render() {
    return (
      <ListView
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
