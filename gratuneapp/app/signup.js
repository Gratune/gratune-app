import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TabBarIOS,
} from 'react-native';

const baricon = "https://cdn3.iconfinder.com/data/icons/buildings-places/512/Concert-256.png"
const usericon = "http://icons.iconarchive.com/icons/icons8/android/512/Users-User-icon.png"

// const venueContent = placeholder="Password"




class signup extends Component{
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

        state = {
        selectedTab: 'userTab',
      };

  _renderContent = (inputName:string, pageContent?) => {
  return (

    <View style={[styles.tabContent]}>
    <TextInput
    style={styles.login_input}
    placeholder={inputName}
    />
    <TextInput
    style={styles.login_input}
    placeholder="E-mail"
    />
    <TextInput
    style={styles.login_input}
    placeholder="Password"
    />
    <TextInput
    style={styles.login_input}
    placeholder="Confirm Password"
    />
    <TextInput
    style={styles.login_input}
    placeholder="Password"
    />
    </View>
  );
};

render() {
  return (
    <TabBarIOS
      unselectedTintColor="#Cdd1c4"
      tintColor="#5c80bc"
      barTintColor="#30323D">
      <TabBarIOS.Item
        title="User Sign-Up"
        selected={this.state.selectedTab === 'userTab'}
        onPress={() => {
          this.setState({
            selectedTab: 'userTab',
          });
        }}>
        {this._renderContent("Name")}
      </TabBarIOS.Item>
      <TabBarIOS.Item
        title="Venue Sign-Up"
        selected={this.state.selectedTab === 'venueTab'}
        onPress={() => {
          this.setState({
            selectedTab: 'venueTab',
          });
        }}>
        {this._renderContent("Venue Name")}
      </TabBarIOS.Item>
    </TabBarIOS>
  );
}
}

var styles = StyleSheet.create({
tabContent: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#4d5061',

},
tabText: {
  fontSize: 40,
  height: 40,
  margin:40,
  // textAlign: 'center',
  color: '#Cdd1c4',
},
login_input:{
  fontSize: 20,
  // color: '#Cdd1c4',
  height: 40,
  // padding: 20,
  justifyContent: 'center',
  backgroundColor: '#Cdd1c4',
},
});





//   render(){
//     return (
//       <View style = {styles.container}>
//         <TextInput
//           style={styles.login_input}
//           placeholder="E-mail"
//         />
//         <TextInput
//           style={styles.login_input}
//           placeholder="Password"
//         />
//
//         </View>
//
//     );
//   }
// }
//
//
//
//
//     const styles = StyleSheet.create({
//         container: {
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: '#4d5061',
//         },
//         login_input: {
//             fontSize: 40,
//             height: 40,
//             margin:40,
//             // textAlign: 'center',
//             color: '#Cdd1c4',
//         },
//
//
//     });

    module.exports = signup;
