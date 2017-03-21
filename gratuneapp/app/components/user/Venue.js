import React, { Component } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import BlurImage from 'react-native-blur-image'

export default class Movie extends Component {
  render({ venue } = this.props) {
    const { name, address, time, event, largeImg, summary } = venue
    return (
      <View style={styles.container}>

        <BlurImage source={{uri: largeImg}} style={styles.imageBackground} blurRadius={35}>

          <ScrollView
            style={{flex: 1}}
          >

            <Text style={[styles.text, styles.title]}>{name.toUpperCase()}</Text>

            <Text style={styles.text, styles.name}>{event}</Text>
            <View style={styles.place}>
              <Text style={styles.text}>{time}</Text>

              <Text style={styles.text}>{address}</Text>
            </View>
            <View style={styles.plot}>
              <Text style={styles.plotText}>{summary}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => {this.props.navigator.pop()}}
                activeOpacity={0.9}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Back to Venues</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

        </BlurImage>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  imageBackground: {
    flex: 1,
    padding: 20,
  },
  text: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textShadowColor: '#222',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
  title: {
    fontSize: 22,
    marginTop: 70,
    marginBottom: 5,
    textAlign: 'center',
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: '#fff',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textShadowColor: '#222',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
  place: {
    paddingTop: 20,
    alignItems: 'center'
  },
  plot: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    marginTop: 40,
    padding: 10
  },
  plotText: {
    color: '#333',
    fontFamily: 'Avenir',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#5C80BC',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17
  }
})
