import React, { useState, createContext } from 'react';
export const BookContext = createContext();

const BookContextProvider = (props) =>  {
    const [ books, setBooks ] = useState([
        { id: 1, title: 'Book 1', author: 'Mario' },
        { id: 2, title: 'Book 2', author: 'Yoshi' },
        { id: 3, title: 'Book 3', author: 'Peach' }        
    ])

    const addBook = (book) => {
        let newBook = { id: 4, title: book.title, author: book.author }
        setBooks([...books, newBook ])

    }
    const removeBook = (id) => {
 
         const newBooks = books.filter(book => {
             return !(book.id === id)
         })
        
        setBooks(newBooks)
    }

    return (
            <BookContext.Provider value={{ books, addBook, removeBook }}>
                {props.children}
            </BookContext.Provider>            
    )
}

export default BookContextProvider;