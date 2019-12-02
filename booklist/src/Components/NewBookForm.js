import React, { useContext, useState } from 'react';
import { BookContext } from '../Contexts/BookContext'

function NewBookForm() {
    const [ title, setTitle ] = useState('')
    const [ author, setAuthor ] = useState('')
    const { addBook } = useContext(BookContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addBook({ title: title, author: author, id: 4 })
        setTitle('')
        setAuthor('')
    }

    const handleTitleInput = (e) => {
        setTitle(e.target.value)
    }
    const handleAuthorInput = (e) => {
        setAuthor(e.target.value)
    }
    return (
        <form onSubmit={ handleSubmit }>
            <input type='text' placeholder='Book title' value={title} onChange={ handleTitleInput } />
            <input type='text' placeholder='Book author' value={author} onChange={ handleAuthorInput } />
            <input type='submit' value='Add book' />
        </form>
    )
}

export default NewBookForm;
