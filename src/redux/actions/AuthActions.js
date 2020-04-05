import { SET_USER_DETAILS, CLEAR_ALL, LOADING_STATUS } from "../types";
import { SUCCESS, WEB_CLIENT_ID } from "../../constants";
import {
    GoogleSignin,
} from 'react-native-google-signin';
import firebase from 'react-native-firebase';

export const dispatchUserDetails = (dispatch, message) => {
    dispatch({ type: SET_USER_DETAILS, payload: message })
}

export const onGoogleSignIn = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: LOADING_STATUS, payload: true })
            await GoogleSignin.configure({
                webClientId: WEB_CLIENT_ID,
            });
            const data = await GoogleSignin.signIn()
            const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
            const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
            const user = firebaseUserCredential.user._user
            setUserData({
                name: user.displayName,
                email: user.email,
                image: user.photoURL
            })
            dispatch({ type: LOADING_STATUS, payload: false })
            dispatchUserDetails(dispatch, firebaseUserCredential.user._user)
            return {
                success: SUCCESS
            }

        } catch (e) {
            dispatch({ type: LOADING_STATUS, payload: false })
            console.log(e);
        }
    }
}

export const setUserData = async (userDetails) => {
    const res = await firebase.firestore().collection("users").add(userDetails)
}

export const logout = () => {
    return async (dispatch) => {
        dispatch({ type: CLEAR_ALL })
        return {
            success: SUCCESS
        }
    }
}