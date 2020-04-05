import { USER_DETAILS, CLEAR_ALL, SET_USER_DETAILS } from "../types";

const INITIAL_STATE = {
    userDetails: {},
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER_DETAILS:
            return { ...state, userDetails: { ...action.payload } }
        case CLEAR_ALL:
            return INITIAL_STATE
        default:
            return state
    }
}