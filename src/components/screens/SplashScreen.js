import React, { useEffect } from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux'

const SplashScreen = (props) => {

    props.navigation.setOptions({
        headerShown: false
    })

    useEffect(() => {
        setTimeout(() => {
            checkUserAvail(props)
        }, 1000)
    }, []);

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontWeight: "bold",
                fontSize: 30,

            }}>Splitter</Text>
        </View>
    )
}
const checkUserAvail = (props) => {
    if (Object.keys(props.userDetails).length > 0)
        props.navigation.reset({ index: 0, routes: [{ name: "HomeScreen" }] })
    else
        props.navigation.reset({ index: 0, routes: [{ name: "LoginScreen" }] })
}

export const mapStateToProps = (state) => {
    return {
        userDetails: state.persistedReducer.userDetails
    }

}
export default connect(mapStateToProps)(SplashScreen)