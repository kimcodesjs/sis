import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Welcome from './components/Welcome'
import Artisan from './components/Artisan'
import Classic from './components/Classic'

const AppRouter = () => (
    <BrowserRouter>
        <div> 
            <Switch>
                <Route path="/" component={Welcome} exact={true} />
                <Route path="/artisan" component={Artisan} />
                <Route path="/classics" component={Classic} />
            </Switch>
        </div>
    </BrowserRouter>
)
// will have to add id to room route
export default AppRouter