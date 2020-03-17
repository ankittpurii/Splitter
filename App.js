/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from 'react-native-google-signin';
import firebase from 'react-native-firebase';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => googleSignin()}
      />
    </View>
  );
};
export const googleSignin = async () => {
  try {
    await GoogleSignin.configure({
      webClientId:
      '638312807146-9n4egm01986ms334jmfjjcqn95e5duc3.apps.googleusercontent.com',
    });

    const data = GoogleSignin.signIn()
      .then(res => {
        console.log(res, "res");
      })
      .catch(err => console.log(err));
    console.log(data);
  } catch (e) {
    console.log(e);
    if (!e.code === statusCodes.SIGN_IN_CANCELLED) {
      if (e.toString().startsWith('Error: RNGoogleSignInError'))
        log(e, 'error');
      else throw e;
    }
  }
};
const styles = StyleSheet.create({});

export default App;
