import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { basketReducer } from './redux/reducer'
import { BrowserRouter, Route, Switch, useRouteMatch } from 'react-router-dom'
import Welcome from './components/Welcome'
import NavPanel from './components/NavPanel'
import Gallery from './components/Gallery'
import Item from './components/Item'
import ShoppingCart from './components/ShoppingCart'

const store = createStore(basketReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const AppRouter = () => {
return (
    <div>
        
        <BrowserRouter>

            <NavPanel className='header'/>

            <Switch>
                <Route path="/" component={Welcome} exact={true}/>
                <Route path={'/:category/:item'}>
                        <Item 
                            location={location}/>
                </Route>
                <Route path="/:category">
                    <Gallery location={location}/>
                </Route>    
            </Switch>
            
            <ShoppingCart className='shopping-cart'/>
        </BrowserRouter>
    </div>
)
}
ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>, 
    document.getElementById('app')
)

