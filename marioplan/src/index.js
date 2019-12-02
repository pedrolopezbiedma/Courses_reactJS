import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux imports
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Store/Reducers/rootReducer'

// Thunk imports
import thunk from 'redux-thunk'

// Firebase imports
import firebaseInstance from './Config/firebaseConfig'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import { getFirestore, reduxFirestore } from 'redux-firestore'

const appStore = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument( { getFirebase, getFirestore })),
        reactReduxFirebase(firebaseInstance, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true }),
        reduxFirestore(firebaseInstance)
    )
);

appStore.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={appStore}><App /></Provider>, document.getElementById('root'));

})
//ReactDOM.render(<Provider store={ appStore }><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
