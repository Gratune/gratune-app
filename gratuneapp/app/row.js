import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Dimensions from 'Dimensions'

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
  // Row
  row: {
    paddingBottom: 4,                   // Add padding at the bottom
  },
  // Background image
  imageBackground: {
    height: screen.height / 3,          // Divide screen height by 3
    justifyContent: 'center',           // Center vertically
    alignItems: 'center',               // Center horizontally
  },
  // Shared text style
  text: {
    color: '#fff',                      // White text color
    backgroundColor: 'transparent',     // No background
    fontFamily: 'Avenir',               // Change default font
    fontWeight: 'bold',                 // Bold font
    // Add text shadow
    textShadowColor: '#222',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  // Movie title
  title: {
    fontSize: 22,                       // Bigger font size
  },
  // Rating row
  rating: {
    flexDirection: 'row',               // Arrange icon and rating in one line
  },
  // Certified fresh icon
  icon: {
    width: 22,                          // Set width
    height: 22,                         // Set height
    marginRight: 5,                     // Add some margin between icon and rating
  },
  // Rating value
  value: {
    fontSize: 16,                       // Smaller font size
  },
});


export default class Row extends Component {
  render({ venue, onPress } = this.props) {
    const { title, address, date, tagline, image } = venue
    return (
      <TouchableOpacity
        style={styles.row}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Image source={{uri: image}} style={styles.imageBackground}>

          <Text style={[styles.text, styles.title]}>{title.toUpperCase()}</Text>

          <Text style={[styles.text, styles.value]}>{date}</Text>

          <Text style={[styles.text, styles.value]}>{tagline}</Text>

          <View style={styles.address}>
            <Text style={[styles.text, styles.value]}>{address}</Text>
          </View>

        </Image>
      </TouchableOpacity>
    )
  }

}
