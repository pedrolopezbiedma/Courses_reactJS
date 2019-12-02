import { ThemeContext } from '../Contexts/ThemeContext'
import { AuthContext } from '../Contexts/AuthContext'
import React, { useContext } from 'react';

function Navbar() {
    const { isAuthenticated, toggleAuthentication } = useContext(AuthContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark

    return (
        <nav style={{ background: theme.ui, color: theme.syntax }} >
            <h1>Context App</h1>
            <div onClick={toggleAuthentication}>
                <p>{ isAuthenticated ? 'Logged' : 'Not logged'} </p>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </nav>
    )
}

export default Navbar;
