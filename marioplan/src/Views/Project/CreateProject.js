import React from 'react';
import { Redirect } from 'react-router-dom'

// Redux imports
import { connect } from 'react-redux'
import { createProject } from '../../Store/Actions/projectActions'

class CreateProject extends React.Component{

  state = {
    projectTitle: '',
    projectContent: ''
  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push('/')
  }
  
  render(){
    const { loggedUser } = this.props;
    if(loggedUser){
      return (
          <div className="create-project container">
              <form className='white' onSubmit={this.handleSubmit}>
                  <h5 className='grey-text darken-4'>New Project</h5>
                  <div className='input-field'>
                      <label htmlFor="projectTitle">Project Title</label>
                      <input type="text" id='projectTitle' onChange={this.handleChange}/>
                  </div>
                  <div className='input-field'>
                      <label htmlFor="projectContent">Project Content</label>
                      <textarea name="projectContent" id="projectContent" className='materialize-textarea' onChange={this.handleChange}></textarea>
                  </div>
                  <div className='input-field'>
                      <button className='btn pink lighten-1 z-depth-1'>Create Project</button>
                  </div>
              </form>
          </div>
      );
    }
    else {
      return(
        <Redirect to='/signin' />
      )
    }
  }
}

const mapStateToProps = (storeState) => {
  return {
    loggedUser: storeState.firebase.auth.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
