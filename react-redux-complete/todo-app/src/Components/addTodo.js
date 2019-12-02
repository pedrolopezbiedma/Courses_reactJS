import React from 'react'

class addTodo extends React.Component{
    state = {
        newTodo: ''
    }
    handleChange = (e) => {
        this.setState({
            newTodo: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.newTodo)
        this.setState({
            newTodo: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="">Add a new Todo:</label>
                    <input type="text" id='newTodo' value={this.state.newTodo} onChange={ this.handleChange }/>
                </form>
            </div>
        )
    }
}

export default addTodo;