import React from 'react';
import {
    View
} from 'react-native';
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';


import { onGoogleSignIn } from '../../redux/actions'

import { CustomButton } from '../reusableComp';
import HOC from '../HOC';

const LoginScreen = props => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    navigation.setOptions({
        headerShown: false
    });

    const googleSignin = async () => {
        const res = await dispatch(onGoogleSignIn())
        if (res.success) {
            navigation.reset({ index: 0, routes: [{ name: "HomeScreen" }] })
        }
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <CustomButton
                title="Login"
                onPress={() => {
                    googleSignin()
                }}
            />
        </View>
    );
};



export default HOC(LoginScreen);
