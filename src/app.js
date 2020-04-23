import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Welcome from './components/Welcome'
import NavPanel from './components/NavPanel'
import Gallery from './components/Gallery'
import Item from './components/Item'
import ShoppingCart from './components/ShoppingCart'



const App = () => {
    return (
        <div>
            
            <BrowserRouter>

                <NavPanel className='header'/>

                <Switch>
                    <Route path="/" component={Welcome} exact={true}/>
                    <Route path={'/:collection/:item'}>
                            <Item 
                                location={location}/>
                    </Route>
                    <Route path="/:collection">
                        <Gallery location={location}/>
                    </Route>    
                </Switch>
                
                <ShoppingCart className='shopping-cart'/>
            </BrowserRouter>
        </div>
    )
}

export default App

