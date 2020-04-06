import React, { useEffect } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { connect } from 'react-redux'

import { CustomButton } from '../reusableComp';
import { useLoading } from '../../Hooks/useLoading';

import { logout, getUsersList } from '../../redux/actions';

const HomeScreen = (props) => {

    // props.navigation.setOptions({
    //     headerTitleAlign: 'center'
    // });

    useEffect(() => {
       
        props.getUsersList()
    }, []);

    const [loader] = useLoading()

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "#88B04B",
            }}>
            <Text style={{
                padding: 10
            }}>Hello {props.userDetails.email} !</Text>
            <CustomButton
                title="Logout"
                onPress={() => {
                    onLogoutClick(props)
                }}
            />
            {
                loader
            }
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
        userDetails: state.persistedReducer.userDetails,
        usersList: state.UsersReducer.usersList
    }
}

export default connect(mapStateToProps, { logout, getUsersList })(HomeScreen);
