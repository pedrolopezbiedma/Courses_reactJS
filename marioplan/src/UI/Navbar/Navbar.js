import React from 'react';

// Component Imports
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

// Routing imports
import { Link } from 'react-router-dom'

// Redux imports
import { connect } from 'react-redux'

const Navbar = (props) => {

    //const loggedUser = props.loggedUser;
    //const userProfile = props.profile;
    const { loggedUser, userProfile } = props;
    return(
        <nav className='nav-wrapper grey darken-3'>
            <div className='container'>
                <Link to='/' className='brand-logo'>MarioPlan</Link>
                { loggedUser ? <SignedInLinks userProfile={userProfile} /> : <SignedOutLinks /> }
            </div>
        </nav>
    )
}

const mapStateToProps = (storeState) => {
    return{
        loggedUser: storeState.firebase.auth.uid,
        userProfile: storeState.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);