import React from 'react';
import Navbar from '../src/Components/Navbar'
import BookList from '../src/Components/BookList'
import ThemeToggle from './Components/ThemeToggle';
import ThemeContext from '../src/Contexts/ThemeContext'
import AuthContext from '../src/Contexts/AuthContext'
import BookContext from './Contexts/BookContext';

function App() {
  return (
    <div className="App">
      <AuthContext>
        <ThemeContext>
          <Navbar />
          <BookContext>
            <BookList />
          </BookContext>
          <ThemeToggle />  
        </ThemeContext>
      </AuthContext>
    </div>
  );
}

export default App;
