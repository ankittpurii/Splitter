import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux'
import { onGoogleSignIn } from '../../redux/actions'
import { WEB_CLIENT_ID } from '../../constants';

const LoginScreen = props => {

    props.navigation.setOptions({
        headerShown: false
    });

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>

            <TouchableOpacity
                style={{
                    height: 50,
                    width: 180,
                    borderRadius: 10,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={() => {
                    googleSignin(props)
                }}>
                <Text style={{
                    color: 'white'
                }}>Google Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const googleSignin = async (props) => {
    const res = await props.onGoogleSignIn()
    if (res.success) {
        props.navigation.reset({ index: 0, routes: [{ name: "HomeScreen" }] })
    }
};
const styles = StyleSheet.create({});

export default connect(null, {
    onGoogleSignIn
})(LoginScreen);
