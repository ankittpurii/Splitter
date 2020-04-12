import React, { useEffect } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

import { CustomButton } from '../reusableComp';

import { logout, getUsersList } from '../../redux/actions';
import HOC from '../HOC';

const HomeScreen = (props) => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    useEffect(() => {
        dispatch(getUsersList())
    }, []);

    const onLogoutClick = async () => {
        const res = await dispatch(logout())
        if (res.success) {
            navigation.reset({ index: 0, routes: [{ name: "LoginScreen" }] })
        }
    }

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
            }}>Hello  !</Text>
            <CustomButton
                title="Logout"
                onPress={() => {
                    onLogoutClick(props)
                }}
            />
        </View>
    );
};


const mapStateToProps = (state) => {
    return {
        userDetails: state.persistedReducer.userDetails,
        usersList: state.UsersReducer.usersList
    }
}

export default HOC(HomeScreen);
