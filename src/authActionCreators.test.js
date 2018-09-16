import authActionCreators from './authActionCreators'
import {
    AUTH_SET_WAITING,
    AUTH_SET_FAILED,
    AUTH_SET_SUCCEEDED,
} from './authActions'

describe( 'actions', () => {
    test( 'should create an action to set auth waiting', () => {
        const expectedAction = {
            type: AUTH_SET_WAITING,
        }

        expect( authActionCreators.authSetWaiting() ).toEqual( expectedAction )
    } )

    test( 'should create an action to set auth failed', () => {
        const expectedAction = {
            type: AUTH_SET_FAILED,
        }

        expect( authActionCreators.authSetFailed() ).toEqual( expectedAction )
    } )

    test( 'should create an action to set auth succeeded', () => {
        const id = 123
        const user = { id: 123, email: 'test@example.com', name: 'Test User' }
        const expectedAction = {
            type: AUTH_SET_SUCCEEDED,
            payload: { id, user },
        }

        expect( authActionCreators.authSetSucceeded( id, user ) ).toEqual( expectedAction )
    } )
} )
