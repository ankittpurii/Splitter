import React from 'react';
import {
    View
} from 'react-native';
import { connect } from 'react-redux'

import { onGoogleSignIn } from '../../redux/actions'

import { useLoading } from '../../Hooks/useLoading';
import { CustomButton } from '../reusableComp';

const LoginScreen = props => {

    props.navigation.setOptions({
        headerShown: false
    });

    const [loader] = useLoading()

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
                    googleSignin(props)
                }}
            />
            {
                loader
            }
        </View>
    );
};

const googleSignin = async (props) => {
    const res = await props.onGoogleSignIn()
    if (res.success) {
        props.navigation.reset({ index: 0, routes: [{ name: "HomeScreen" }] })
    }
};

export default connect(null, {
    onGoogleSignIn
})(LoginScreen);
