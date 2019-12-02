import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';

function ThemeToggle() {
    const { toggleTheme } = useContext(ThemeContext);
        return ( 
            <button onClick={ toggleTheme }>Toggle theme</button>
        );
}

export default ThemeToggle;
