import React from 'react';
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import Exercises from './Components/Exercises'
import ExercisesContext from './Context/ExercisesContext';

function App() {
  return (
    <div className="App">
      <ExercisesContext>
        <Navbar />
          <Exercises />
        <Footer/>
      </ExercisesContext>
    </div>
  );
}

export default App;
