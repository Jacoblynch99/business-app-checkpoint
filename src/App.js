import React, { useState } from 'react'
import Navigation from '../src/containers/Navigation'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navigation />
                <Router />
            </BrowserRouter>
        </Provider>
    )
}

export default App
