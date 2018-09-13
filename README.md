# @fieldwork/redux-auth

Auth management actions and reducer for Redux and React.

## API

### `authReducer`

Include auth reducers in the root reducer with:

```
import { combineReducers } from 'redux'
import { authReducer } from '@fieldwork/redux-auth'

const appReducer = combineReducers( {
    auth: authReducer,
    ...myOtherReducers,
} )
```

### `withAuth( MyComponent )`

Shorthand for:

```
import { connect } from 'react-redux'
import { authActions } from '@fieldwork/redux-auth'

const mapStateToProps = ( state ) => ( {
    auth: state.auth,
} )

connect( mapStateToProps, authActions )( MyComponent )
```

### Action Creators

A component connected using `withAuth` has the following actions available as props:

```
authSetId( id: number | string )
authSetUser( user: {} )
authSetWaiting()
authSetDone()
authSetFailed()
authSetSucceeded()
```

### `auth` Prop

A component connected using `withAuth` has an `auth` props containing:

```
{
    id: null | number | string,
    user: {},
    isWaiting: null | boolean,
    isDone: boolean,
    hasFailed: null | boolean,
    hasSucceeded: null | boolean,
}
```
