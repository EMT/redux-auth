import authReducer, { initialState } from './authReducer'
import authActionCreators from './authActionCreators'

const succeededState = {
    ...initialState,
    isWaiting: false,
    isDone: true,
    hasFailed: false,
    hasSucceeded: true,
}

const failedState = {
    ...initialState,
    isWaiting: false,
    isDone: true,
    hasFailed: true,
    hasSucceeded: false,
}

describe( 'reducers', () => {
    test( 'should return initial state', () => {
        expect( authReducer( undefined, {} ) )
            .toEqual( initialState )
    } )

    test( 'AUTH_SET_WAITING should set auth waiting', () => {
        expect( authReducer( initialState, authActionCreators.authSetWaiting() ) )
            .toEqual( {
                ...initialState,
                isWaiting: true,
                isDone: false,
            } )
    } )

    test( 'AUTH_SET_SUCCEEDED should set the auth user ID', () => {
        expect( authReducer( initialState, authActionCreators.authSetSucceeded( 123 ) ) )
            .toEqual( { ...succeededState, id: 123 } )

        expect( authReducer( initialState, authActionCreators.authSetSucceeded( null ) ) )
            .toEqual( { ...succeededState, id: null } )

        expect( authReducer( initialState, authActionCreators.authSetSucceeded( 'stringId' ) ) )
            .toEqual( { ...succeededState, id: 'stringId' } )
    } )

    test( 'AUTH_SET_SUCCEEDED should set the auth user object', () => {
        const user = { id: 123, email: 'test@example.com', name: 'Test User' }
        expect( authReducer( initialState, authActionCreators.authSetSucceeded( 123, user ) ) )
            .toEqual( { ...succeededState, id: 123, user } )

        const user2 = { id: 1234, email: 'test2@example.com', name: 'Test User 2' }
        expect( authReducer( initialState, authActionCreators.authSetSucceeded( 123, user2 ) ) )
            .toEqual( { ...succeededState, id: 123, user: user2 } )
    } )

    test( 'AUTH_SET_SUCCEEDED should set auth succeeded', () => {
        expect( authReducer( initialState, authActionCreators.authSetSucceeded() ) )
            .toEqual( succeededState )
    } )

    test( 'AUTH_SET_FAILED should unset the auth user ID and auth user object', () => {
        expect( authReducer( [], authActionCreators.authSetFailed() ) )
            .toEqual( { ...failedState, id: null, user: {} } )
    } )

    test( 'AUTH_SET_FAILED should set auth failed', () => {
        expect( authReducer( [], authActionCreators.authSetFailed() ) )
            .toEqual( failedState )
    } )
} )
