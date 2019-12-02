import React from 'react';

// Redux imports
import { connect } from 'react-redux'
import { signIn } from '../../Store/Actions/authActions'

class SignIn extends React.Component{

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  
  render(){
    const authError = this.props.authError

    return (
        <div className="sign-in container">
            <form className='white' onSubmit={this.handleSubmit}>
                <h5 className='grey-text darken-4'>Sign In</h5>
                <div className='input-field'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' onChange={this.handleChange}/>
                </div>
                <div className='input-field'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' onChange={this.handleChange}/>
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-1'>Submit</button>
                    <div className='red-text center'>
                      { authError ? <p>Login Failed</p> : null }
                    </div>
                </div>
            </form>
        </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    authError: storeState.authzRed.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
