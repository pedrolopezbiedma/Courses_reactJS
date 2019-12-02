import React, { Component } from 'react';
import TodosList from './Views/todosList';
import AddTodo from './Components/addTodo'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'You need to complete a lot of Courses!!!!'},
      { id: 2, content: 'You need to become a Ninja Developer!!!!'}
    ]
  }
  addTodo = (newTodo) => {
    let newTodos = this.state.todos;
    newTodos.push({
      id: Math.random(),
      content: newTodo
    })

    this.setState({
      todos: newTodos
    })
  }
  deleteTodo = (id) => {
    let newTodos = this.state.todos.filter(todo => {
      return (todo.id !== id)
    })

    this.setState({
      todos: newTodos
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className='center blue-text'>Todo's List</h1>
        <TodosList todos={ this.state.todos } deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
