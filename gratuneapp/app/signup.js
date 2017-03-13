import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TextInput
} from 'react-native';

class signup extends Component{
  render(){
    return ( <View style = {styles.container}>
        <TextInput
          style={styles.login_input}
          placeholder="E-mail"
        />
        <TextInput
          style={styles.login_input}
          placeholder="Password"
        />
        </View>
    );
  }
}




    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#4d5061',
        },
        login_input: {
            fontSize: 40,
            textAlign: 'center',
            color: '#Cdd1c4',
        },


    });

    module.exports = signup;
