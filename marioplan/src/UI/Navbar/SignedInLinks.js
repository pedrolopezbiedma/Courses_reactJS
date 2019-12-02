import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../Store/Actions/authActions'

const SignedInLinks = (props) => {
    return(
        <ul className='right'>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={props.logOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating green lighten-1'>{props.userProfile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);