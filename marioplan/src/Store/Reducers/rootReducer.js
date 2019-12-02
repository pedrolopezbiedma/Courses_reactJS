// Component Imports
import projectReducer from './projectReducer'
import authReducer from './authReducer'

// Redux Imports
import { combineReducers } from 'redux'

// Firestore imports
import { firestoreReducer } from 'redux-firestore'

// Firebase imports
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    projectRed: projectReducer, 
    authzRed: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;
