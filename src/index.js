import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reduxFirestore, firestoreReducer, getFirestore } from 'redux-firestore'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { basketReducer } from './redux/reducer'
import thunk from 'redux-thunk'

var firebaseConfig = {
    apiKey: "AIzaSyADMGVZYwEu4zrMT2L6WknVYmSP_UEW_7Y",
    authDomain: "serenity-in-soap.firebaseapp.com",
    databaseURL: "https://serenity-in-soap.firebaseio.com",
    projectId: "serenity-in-soap",
    storageBucket: "serenity-in-soap.appspot.com",
    messagingSenderId: "99495186322",
    appId: "1:99495186322:web:b047ad6d8c1a2530653b4b",
    measurementId: "G-K9MT90LW4G"
}
firebase.initializeApp(firebaseConfig);
firebase.firestore()

const rootReducer = combineReducers({
    firestore: firestoreReducer,
    cart: basketReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({getFirestore})),
    reduxFirestore(firebase)
))

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>, 
    document.getElementById('app')
)