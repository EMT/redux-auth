// @flow
import {
    AUTH_SET_WAITING,
    AUTH_SET_FAILED,
    AUTH_SET_SUCCEEDED,
} from './authActions'

import type {
    TypeAuthSetWaiting,
    TypeAuthSetFailed,
    TypeAuthSetSucceeded,
} from './authActions'

type TypeAuthAction =
    TypeAuthSetWaiting |
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
        case AUTH_SET_WAITING:
            return { ...state, isWaiting: true, isDone: false }

        case AUTH_SET_FAILED:
            return {
                user: {},
                id: null,
                isWaiting: false,
                isDone: true,
                hasFailed: true,
                hasSucceeded: false,
            }

        case AUTH_SET_SUCCEEDED:
            return {
                user: action.payload.user || {},
                id: typeof action.payload.id === 'undefined' ? null : action.payload.id,
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
