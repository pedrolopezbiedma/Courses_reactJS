import React, { Component, createContext } from 'react';

export const BookContext = createContext();

class BookContextProvider extends Component {
    state = {  
        books: [
            { id: 1, title: 'Book 1' },
            { id: 2, title: 'Book 2' },
            { id: 3, title: 'Book 3' }
        ]
    }
    /*
    toggleTheme = () => {
        this.setState({
            isLightTheme: !this.state.isLightTheme
        })
    }*/
    render() { 
        return (  
            <BookContext.Provider value={{ ...this.state }}>
                { this.props.children }
            </BookContext.Provider>
        );
    }
}
 
export default BookContextProvider;