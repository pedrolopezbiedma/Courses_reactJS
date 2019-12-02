import React from 'react'

const todosList = ({todos, deleteTodo}) => {
    let todoList;
    if(todos.length === 0){
        todoList = <p className='center'>You have nothing left dude!!! </p>
    }
    else{
        todoList = todos.map(todo => {
            return(
                <div className='collection-item' key={ todo.id }>
                    <span onClick={ () => {deleteTodo(todo.id)} }> { todo.content }</span>
                </div>  
            )
        })
    }
    return(
        <div className='todos-list collection'>
            { todoList }
        </div>
    )
}

export default todosList;