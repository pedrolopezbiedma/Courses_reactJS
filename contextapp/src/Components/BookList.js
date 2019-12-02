import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext'
import { BookContext } from '../Contexts/BookContext';

function BookList() {
    const { books } = useContext(BookContext);
    const { isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark
    return (
        <div className='book-list' style={{ color: theme.syntax, background: theme.bg}}>
            <ul>
                { books.map( book => {
                    return(
                        <li key={ book.id } style={{ background: theme.ui}}>{ book.title }</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BookList;
