import React, { useContext } from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { ExercisesContext } from '../Context/ExercisesContext'

const Footer = () => {
    // ##### Grabbing context #####
    const { muscles, setFooterSelected, getSelectedFooterIndex } = useContext(ExercisesContext)
    const index = getSelectedFooterIndex()
    
    return (
        <AppBar position="static">
            <Tabs 
                onChange={ setFooterSelected } 
                value={ index } 
                centered>
                { muscles.map( muscle => {
                    return (<Tab key={muscle} label={ muscle } />)
                })}

            </Tabs>
        </AppBar>
    )
}

export default Footer;
