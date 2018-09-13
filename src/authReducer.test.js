import authReducer, { initialState } from './authReducer'
import authActionCreators from './authActionCreators'

describe( 'actions', () => {
    test( 'should set the auth user ID', () => {
        expect( authReducer( [], authActionCreators.authSetId( 123 ) ) )
            .toEqual( { id: 123 } )

        expect( authReducer( [], authActionCreators.authSetId( null ) ) )
            .toEqual( { id: null } )

        expect( authReducer( [], authActionCreators.authSetId( 'stringId' ) ) )
            .toEqual( { id: 'stringId' } )
    } )

    test( 'should set the auth user object', () => {
        const user = { id: 123, email: 'test@example.com', name: 'Test User' }
        expect( authReducer( [], authActionCreators.authSetUser( user ) ) )
            .toEqual( { user } )

        const user2 = { id: 1234, email: 'test2@example.com', name: 'Test User 2' }
        expect( authReducer( [], authActionCreators.authSetUser( user2 ) ) )
            .toEqual( { user: user2 } )
    } )

    test( 'should set auth waiting', () => {
        expect( authReducer( [], authActionCreators.authSetWaiting() ) )
            .toEqual( {
                isWaiting: true,
                isDone: false,
            } )
    } )

    test( 'should set auth done', () => {
        expect( authReducer( [], authActionCreators.authSetDone() ) )
            .toEqual( {
                isWaiting: false,
                isDone: true,
            } )
    } )

    test( 'should set auth failed', () => {
        expect( authReducer( [], authActionCreators.authSetFailed() ) )
            .toEqual( {
                isWaiting: false,
                isDone: true,
                hasFailed: true,
                hasSucceeded: false,
            } )
    } )

    test( 'should set auth succeeded', () => {
        expect( authReducer( [], authActionCreators.authSetSucceeded() ) )
            .toEqual( {
                isWaiting: false,
                isDone: true,
                hasFailed: false,
                hasSucceeded: true,
            } )
    } )

    test( 'should return initial state', () => {
        expect( authReducer( undefined, {} ) )
            .toEqual( initialState )
    } )
} )
