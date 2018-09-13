import authActionCreators from './authActionCreators'
import {
    AUTH_SET_ID,
    AUTH_SET_USER,
    AUTH_SET_WAITING,
    AUTH_SET_DONE,
    AUTH_SET_FAILED,
    AUTH_SET_SUCCEEDED,
} from './authActions'

describe( 'actions', () => {
    test( 'should create an action to set the auth user ID', () => {
        const id = 123
        const expectedAction = {
            type: AUTH_SET_ID,
            payload: 123,
        }

        expect( authActionCreators.authSetId( id ) ).toEqual( expectedAction )
    } )

    test( 'should create an action to set the auth user object', () => {
        const user = { id: 123, email: 'test@example.com', name: 'Test User' }
        const expectedAction = {
            type: AUTH_SET_USER,
            payload: user,
        }

        expect( authActionCreators.authSetUser( user ) ).toEqual( expectedAction )
    } )

    test( 'should create an action to set auth waiting', () => {
        const expectedAction = {
            type: AUTH_SET_WAITING,
        }

        expect( authActionCreators.authSetWaiting() ).toEqual( expectedAction )
    } )

    test( 'should create an action to set auth done', () => {
        const expectedAction = {
            type: AUTH_SET_DONE,
        }

        expect( authActionCreators.authSetDone() ).toEqual( expectedAction )
    } )

    test( 'should create an action to set auth failed', () => {
        const expectedAction = {
            type: AUTH_SET_FAILED,
        }

        expect( authActionCreators.authSetFailed() ).toEqual( expectedAction )
    } )

    test( 'should create an action to set auth succeeded', () => {
        const expectedAction = {
            type: AUTH_SET_SUCCEEDED,
        }

        expect( authActionCreators.authSetSucceeded() ).toEqual( expectedAction )
    } )
} )
