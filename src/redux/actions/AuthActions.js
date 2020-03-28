import { SET_USER_DETAILS, CLEAR_ALL } from "../types";
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
            await GoogleSignin.configure({
                webClientId: WEB_CLIENT_ID,
            });
            const data = await GoogleSignin.signIn()
            const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
            const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
            dispatchUserDetails(dispatch, firebaseUserCredential.user._user)
            return {
                success: SUCCESS
            }

        } catch (e) {
            console.log(e);
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        dispatch({ type: CLEAR_ALL })
        return {
            success: SUCCESS
        }
    }
}