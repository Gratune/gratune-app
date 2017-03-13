import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TextInput,
    Alert,
    Router
} from 'react-native';

import { Actions } from 'react-native-router-flux';


const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

const login = () => {
        return ( <
            View style = {
                styles.container
            } >
            <
            Image style = {
                styles.image
            }
            source = {
                require('./gnote.png')
            }/>
            <Text style = {
                styles.welcome
            } >
            Gratune <
            /Text>
            <TextInput
              style={styles.login_input}
              placeholder="E-mail"
            />
            <TextInput
              style={styles.login_input}
              placeholder="Password"
            />
            <Button
                onPress={onButtonPress}
                title="Sign-In"
                color='#Cdd1c4'
              />
              <Button
                  onPress={Actions.signup}
                  title="Sign-Up"
                  color='#Cdd1c4'
                />
            </View>
        );
    }


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#4d5061',
        },
        image: {
            flex: 1,
            resizeMode: 'contain',
            width: 200,
        },
        welcome: {
            fontSize: 40,
            textAlign: 'center',
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
        signup:{
          color: '#Cdd1c4',
          paddingBottom:100,

        }

    });

    export default login;
