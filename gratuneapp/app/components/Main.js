import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar
} from 'react-native'


import Tabs from 'react-native-tabs'

import {changeText} from '../actions';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {page:'home'};
  }
  render() {
    var self = this;
    return (
      <View style={styles.containerNav}>
        <Tabs selected={this.state.page} style={{backgroundColor:'#30323D'}}
              selectedStyle={{color:'#5C80BC'}} onSelect={el=>this.setState({page:el.props.name})}>
        <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
            <Text name="home" selectedIconStyle={styles.selectedIconStyle}>Home</Text>
            <Text name="second" selectedIconStyle={styles.selectedIconStyle}>Second</Text>
            <Text name="third" selectedIconStyle={styles.selectedIconStyle}>Third</Text>
            <Text name="fourth" selectedIconStyle={styles.selectedIconStyle}>Fourth</Text>
            <Text name="fifth" selectedIconStyle={styles.selectedIconStyle}>Fifth</Text>
        </Tabs>
      </View>
    );
  }
}

var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

var Main = React.createClass({
  render() {

    var renderNavbar = () => {
      return (
        <NavBar />
      )
    }

    return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.headerText}>{this.props.headertext}</Text>
      </View>

      <View style={styles.main}>
        <View style={styles.box}>
          <Text>{this.props.text}</Text>
        </View>
        <View style={styles.box}>
          <Text>Box 2</Text>
        </View>

        <View style={styles.box}>
          <Text>Box 3</Text>
        </View>
      </View>

      <View>{renderNavbar()}</View>
    </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#30323D',
  },
  containerHeader: {
    backgroundColor: '#30323D',
    width: width,
    padding: 16,
    paddingTop: 20,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#4D5061',
    alignItems: 'center'
  },
  headerText: {
    color: 'white',
    fontSize: 20
  },
  containerNav: {
    backgroundColor: '#F5FCFF',
    width: width,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  selectedIconStyle: {
    borderTopWidth: 2,
    borderTopColor: '#5C80BC'
  },
  main: {
    flex: 1,
    padding: 50
  },
  box: {
    backgroundColor: 'gray',
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    width: 300,
    padding: 10,
    height: 100,
  }
});

var mapStateToProps = (state) => {
  return {
    headertext: state.headertext,
    text: state.text
  }
}

module.exports = connect(mapStateToProps)(Main)
