import React from 'react';
import { connect } from 'react-redux'
import { signUp } from '../../Store/Actions/authActions'

class SignUp extends React.Component{

  state = {
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
    this.props.history.push('/')
  }
  
  render(){
    const { signUpError } = this.props;
    return (
        <div className="sign-up container">
            <form className='white' onSubmit={this.handleSubmit}>
                <h5 className='grey-text darken-4'>Sign Up</h5>
                <div className='input-field'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' onChange={this.handleChange}/>
                </div>
                <div className='input-field'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' onChange={this.handleChange}/>
                </div>
                <div className='input-field'>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id='firstname' onChange={this.handleChange}/>
                </div>
                <div className='input-field'>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id='lastname' onChange={this.handleChange}/>
                </div>
                <div className='input-field center'>
                    <button className='btn pink lighten-1 z-depth-1'>Submit</button>
                    <div className='red-text'>
                      { signUpError ? <p> {signUpError} </p> : null}
                    </div>
                </div>
            </form>
        </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return{
    signUpError: storeState.authzRed.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
