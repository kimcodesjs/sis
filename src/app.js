import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './AppRouter'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

//const store = configureStore()

const jsx = (
    // <Provider store={store}>
    //     <AppRouter />
    // </Provider>
    <AppRouter />
)
ReactDOM.render(jsx, document.getElementById('app'))

