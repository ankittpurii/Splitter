// Redux 
import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import UserInfoReducer from './UserInfoReducer'
import LoadingReducer from './LoadingReducer'
import UsersReducer from './UsersReducer'

import AsyncStorage from '@react-native-community/async-storage';


const persistConfig = {
    storage: AsyncStorage,
    key: "persistedReducer",
    version: 1,
};

export default combineReducers({
    LoadingReducer: LoadingReducer,
    UsersReducer: UsersReducer,
    persistedReducer: persistReducer(persistConfig, UserInfoReducer)
})