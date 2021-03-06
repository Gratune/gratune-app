import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Dimensions from 'Dimensions'
import BlurImage from 'react-native-blur-image'

const screen = Dimensions.get('window')

export default class Row extends Component {
  render({ venue, onPress } = this.props) {
    const { name, time, event, smallImg } = venue
    return (
      <View style={styles.container}>
        <TouchableOpacity

          style={styles.row}

          onPress={onPress}

          activeOpacity={0.8}
        >

          <BlurImage source={{uri: smallImg}}         style={styles.imageBackground} blurRadius={20}>

            <Text style={[styles.text, styles.title]}>{name.toUpperCase()}</Text>

            <Text style={styles.text, styles.event}>{event}</Text>

            <Text style={styles.text}>{time}</Text>
          </BlurImage>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#30323D',
  },
  row: {
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },

  imageBackground: {
    height: screen.height / 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#CDD1C4'
  },

  text: {
    color: '#CDD1C4',
    backgroundColor: 'transparent',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textShadowColor: '#222',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },

  event: {
    color: '#CDD1C4',
    backgroundColor: 'transparent',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textShadowColor: '#222',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    fontSize: 18
  },

  title: {
    fontSize: 20,
  }
})
