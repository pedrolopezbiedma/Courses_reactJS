import React, { useContext } from 'react';
import { BookContext } from '../Contexts/BookContext';

function Navbar() {
    const { books } = useContext(BookContext);

    return (
        <div className='navbar'>
            <h1>XnailDev Reading list</h1>
            <p>Currently you have { books.length } books to get through</p>
        </div>
    )
}

export default Navbar;
