// @flow
import type { Node } from 'react'
import { connect } from 'react-redux'
import authActionCreators from './authActionCreators'

const withAuth = ( Component: Node ) => {
    const mapStateToProps = state => ( {
        auth: state.auth,
    } )

    return connect( mapStateToProps, authActionCreators )( Component )
}

export default withAuth
