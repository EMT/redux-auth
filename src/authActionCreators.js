// @flow
import {
    AUTH_SET_ID,
    AUTH_SET_USER,
    AUTH_SET_WAITING,
    AUTH_SET_DONE,
    AUTH_SET_FAILED,
    AUTH_SET_SUCCEEDED,
} from './authActions'

const authActionCreators = {
    authSetId: ( id: number | string ) => ( {
        type: AUTH_SET_ID,
        payload: id,
    } ),

    authSetUser: ( user: { [key: string]: any } ) => ( {
        type: AUTH_SET_USER,
        payload: user,
    } ),

    authSetWaiting: () => ( {
        type: AUTH_SET_WAITING,
    } ),

    authSetDone: () => ( {
        type: AUTH_SET_DONE,
    } ),

    authSetFailed: () => ( {
        type: AUTH_SET_FAILED,
    } ),

    authSetSucceeded: () => ( {
        type: AUTH_SET_SUCCEEDED,
    } ),
}

export default authActionCreators
