// @flow
import {
    AUTH_SET_WAITING,
    AUTH_SET_FAILED,
    AUTH_SET_SUCCEEDED,
} from './authActions'

const authActionCreators = {
    authSetWaiting: () => ( {
        type: AUTH_SET_WAITING,
    } ),

    authSetFailed: () => ( {
        type: AUTH_SET_FAILED,
    } ),

    authSetSucceeded: ( id: null | number | string, user: { [key: string]: any } ) => ( {
        type: AUTH_SET_SUCCEEDED,
        payload: {
            id: typeof id === 'undefined' ? null : id,
            user: typeof user === 'undefined' ? {} : user,
        },
    } ),
}

export default authActionCreators
