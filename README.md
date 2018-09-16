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
authSetWaiting()
authSetFailed()
authSetSucceeded( {
    id: null | number | string,
    user: { [key: string]: any },
} )
```

### `auth` Prop

A component connected using `withAuth` has an `auth` prop containing the following state:

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

Default state:

```
{
    id: null,
    user: {},
    isWaiting: null,
    isDone: false,
    hasFailed: null,
    hasSucceeded: null,
}
```

Example states:

```
authSetWaiting()

{
    ...currentState,
    isWaiting: true,
    isDone: false,
}

authSetFailed()

{
    user: {},
    id: null,
    isWaiting: false,
    isDone: true,
    hasFailed: true,
    hasSucceeded: false,
}

authSetSucceeded( {
    id: 123,
    user: {
        id: 123,
        firstName: 'Bob',
        email: 'bob@example.com',
    }
} )

{
    user: {
        id: 123,
        firstName: 'Bob',
        email: 'bob@example.com',
    },
    id: 123,
    isWaiting: false,
    isDone: true,
    hasFailed: false,
    hasSucceeded: true,
}
```
