import React, { useState } from 'react';

const NewSongForm = ({addSong}) => {
    const [ title, setTitle ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addSong(title)
        setTitle('')
    }
    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    return ( 
        <form onSubmit= { handleSubmit }>
            <label>New Song</label>
            <input type='text' value={title} required onChange= { handleChange }></input>
            <button>Add Song</button>
        </form>
    );
}

export default NewSongForm;