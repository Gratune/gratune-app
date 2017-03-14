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
  containerNav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D5061',
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
  }
});

var mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}


module.exports = connect(mapStateToProps)(Main)
