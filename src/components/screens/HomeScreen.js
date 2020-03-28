import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import { logout } from '../../redux/actions';

navigationOptions = ({ navigation }) => {
    return {
        header: () => null
    }
}
const HomeScreen = (props) => {

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
            <Text style={{
                padding: 10
            }}>Hello {props.userDetails.email} !</Text>
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
                    onLogoutClick(props)
                }}>
                <Text style={{
                    color: 'white'
                }}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const onLogoutClick = async (props) => {
    const res = await props.logout()
    if (res.success) {
        props.navigation.reset({ index: 0, routes: [{ name: "LoginScreen" }] })
    }
}

const mapStateToProps = (state) => {
    return {
        userDetails: state.persistedReducer.userDetails
    }
}


export default connect(mapStateToProps, { logout })(HomeScreen);
