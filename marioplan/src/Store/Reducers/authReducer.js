const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':  
            console.log('Login success')
            return {
                ...state,
                authError: null
            }
    
        case 'LOGIN_ERROR':
            console.log("Login failed")
            return {
                ...state,
                authError: 'Login Failed'
            }
        
        case 'LOGOUT_SUCCESS':
            console.log('Logged out')
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('Signup success')
            return {
                ...state,
                authError: null
            }
            
        case 'SIGNUP_ERROR':
            console.log('Signup error')
            return {
                ...state,
                authError: action.error.message
            }

        default:
            return state;
    }
}

export default authReducer;