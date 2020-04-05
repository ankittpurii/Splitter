import { SET_USERS_LIST } from "../types";

const INITIAL_STATE = {
    usersList: {},
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USERS_LIST:
            return { ...state, usersList: action.payload }
        default:
            return state
    }
}