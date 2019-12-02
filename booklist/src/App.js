import React from 'react';
import Navbar from './Components/Navbar';
import BookContext from './Contexts/BookContext';
import BookList from './Components/BookList';
import NewBookForm from './Components/NewBookForm';

function App() {
  return (
    <div className="App">
      <BookContext>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContext>
    </div>
  );
}

export default App;
