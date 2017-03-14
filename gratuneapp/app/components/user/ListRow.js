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

export default class Row extends Component {
  render({ venue, onPress } = this.props) {
    const { name, time, event, smallImg } = venue
    return (
      <TouchableOpacity

        style={styles.row}

        onPress={onPress}

        activeOpacity={0.8}
      >

        <Image source={{uri: smallImg}} style={styles.imageBackground}>

          <Text style={[styles.text, styles.title]}>{name.toUpperCase()}</Text>

          <Text style={styles.text}>{event}</Text>

          <Text style={styles.text}>{time}</Text>
        </Image>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  row: {
    paddingBottom: 4,
  },

  imageBackground: {
    height: screen.height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    backgroundColor: 'transparent',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textShadowColor: '#222',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },

  title: {
    fontSize: 22,
  }
})
