import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Welcome from './components/Welcome'
import Artisan from './components/Artisan'
import Classic from './components/Classic'
import NavPanel from './components/NavPanel'

const AppRouter = () => (
    <div>
        <BrowserRouter>

            <NavPanel />

            <Switch>
                <Route path="/" component={Welcome} exact={true} />
                <Route path="/artisan" component={Artisan} />
                <Route path="/classic" component={Classic} />
            </Switch>
                
        </BrowserRouter>
    </div>
)

ReactDOM.render(<AppRouter />, document.getElementById('app'))

