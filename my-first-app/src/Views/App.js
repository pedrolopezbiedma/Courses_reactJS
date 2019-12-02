import React from 'react';
import Ninjas from '../Components/Ninjas'
import AddNinja from '../Components/AddNinja'

class App extends React.Component{
  state = {
    ninjas: [
      { name: 'Mario', age: 10, belt: 'Yellow' , id: 1 },
      { name: 'Yoshi', age: 8, belt: 'Black', id: 2 },
      { name: 'Pikachu', age: 15, belt: 'White', id: 3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let newNinjas = this.state.ninjas;
    newNinjas.push(ninja)

    this.setState({
      ninjas: newNinjas
    })
  }
  deleteNinja = (id) => {
    let newNinjas = this.state.ninjas.filter(ninja => {
      if(ninja.id === id){
        return false;
      }
      else{
        return true;
      }
    })
    this.setState({
      ninjas: newNinjas
    })
  }
  render(){
    return (
      <div className="App">
        <h2>Welcome to my first react App</h2>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
