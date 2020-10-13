import React from 'react'
import { Switch, Route } from 'react-router'
import Listings from './components/Listings'
import Login from './components/Login'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listings} />
            <Route path="/login" component={Login} />
        </Switch>
    )
}

export default Router
