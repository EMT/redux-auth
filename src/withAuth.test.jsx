import React from 'react'
import renderer from 'react-test-renderer'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import authReducer, { initialState } from './authReducer'
import withAuth from './withAuth'

let store

beforeEach( () => {
    store = createStore( combineReducers( { auth: authReducer } ) )
} )

const TestComponent = ( { auth: { id, user, isWaiting, isDone, hasFailed, hasSucceeded } } ) => (
    <div
        id={ id }
        user={ user }
        isWaiting={ isWaiting }
        isDone={ isDone }
        hasFailed={ hasFailed }
        hasSucceeded={ hasSucceeded }
    ></div>
)

describe( 'withAuth', () => {
    test( 'should provide auth state props to a wrapped component', () => {
        const ComponentWithAuth = withAuth( TestComponent )
        const component = renderer.create(
            <Provider store={ store }>
                <ComponentWithAuth></ComponentWithAuth>
            </Provider>
        )

        expect( component.root.findByType( 'div' ).props ).toEqual( initialState )
    } )
} )
