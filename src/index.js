import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reduxFirestore, firestoreReducer, getFirestore, createFirestoreInstance } from 'redux-firestore'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { basketReducer } from './redux/basket-reducer'
import { viewReducer } from './redux/view-reducer'
import thunk from 'redux-thunk'
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'

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
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    cart: basketReducer,
    view: viewReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({getFirestore})),
    reduxFirestore(firebase)
))

const rrfConfig = {
    userProfile: 'users'
}
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: Store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <Provider store={Store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>, 
    document.getElementById('app')
)