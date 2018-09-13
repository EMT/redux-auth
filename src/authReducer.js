// @flow
import {
    AUTH_SET_ID,
    AUTH_SET_USER,
    AUTH_SET_WAITING,
    AUTH_SET_DONE,
    AUTH_SET_FAILED,
    AUTH_SET_SUCCEEDED,
} from './authActions'

import type {
    TypeAuthSetId,
    TypeAuthSetUser,
    TypeAuthSetWaiting,
    TypeAuthSetDone,
    TypeAuthSetFailed,
    TypeAuthSetSucceeded,
} from './authActions'

type TypeAuthAction =
    TypeAuthSetId |
    TypeAuthSetUser |
    TypeAuthSetWaiting |
    TypeAuthSetDone |
    TypeAuthSetFailed |
    TypeAuthSetSucceeded

type TypeState = {
    id: ? number | string,
    user: { [key: string ]: any },
    isWaiting: ?boolean,
    isDone: boolean,
    hasFailed: ?boolean,
    hasSucceeded: ?boolean,
}

export const initialState = {
    id: null,
    user: {},
    isWaiting: null,
    isDone: false,
    hasFailed: null,
    hasSucceeded: null,
}

const authReducer = ( state: TypeState = initialState, action: TypeAuthAction ) => {
    switch ( action.type ) {
        case AUTH_SET_ID:
            return { ...state, user: state.user, id: action.payload }

        case AUTH_SET_USER:
            return { ...state, user: action.payload }

        case AUTH_SET_WAITING:
            return { ...state, isWaiting: true, isDone: false }

        case AUTH_SET_DONE:
            return { ...state, isWaiting: false, isDone: true }

        case AUTH_SET_FAILED:
            return {
                ...state,
                isWaiting: false,
                isDone: true,
                hasFailed: true,
                hasSucceeded: false,
            }

        case AUTH_SET_SUCCEEDED:
            return {
                ...state,
                isWaiting: false,
                isDone: true,
                hasFailed: false,
                hasSucceeded: true,
            }

        default:
            return state
    }
}

export default authReducer
