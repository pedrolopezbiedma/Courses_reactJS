import React, { useContext } from 'react';
import { BookContext } from '../Contexts/BookContext'
import BookDetails from './BookDetails';

function BookList() {
    const { books } = useContext(BookContext);

    if(!books.length){
        return <div className='empty'>No books to read. Hello free time :)</div>
    }
    return (
        <div className='book-list'>
            <ul>
                { books.map(book => {
                    return ( 
                        <BookDetails key={book.id} book={book} />
                    )
                })}
            </ul>
        </div>
    )
}

export default BookList;
