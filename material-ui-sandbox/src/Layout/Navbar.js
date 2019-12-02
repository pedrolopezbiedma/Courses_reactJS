import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import NewExercise from '../Components/NewExercise'

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="subtitle1" style={{ flex: 1}}>
                    Exercise Database
                </Typography>
                <NewExercise/>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
