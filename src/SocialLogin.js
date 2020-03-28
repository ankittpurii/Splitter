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

export const SocialLogin = () => {
    return (
        <View
            style={{
                flex: 1,
            }}>
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => googleSignin()}
            />
        </View>
    );
};

const googleSignin = async () => {
    try {
        await GoogleSignin.configure({
            webClientId:
                '638312807146-9n4egm01986ms334jmfjjcqn95e5duc3.apps.googleusercontent.com',
        });

        const data = await GoogleSignin.signIn()
        const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
        const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
        console.log(firebaseUserCredential.user.toJSON())
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
