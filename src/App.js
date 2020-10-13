import React, { useState } from 'react'
import Navigation from './components/Navigation'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
// import { Provider } from 'react-redux'
// import store from './redux/store'

function App() {
    let [prefersDarkMode, setMode] = useState(false)
    let [primaryColor, setPrimaryColor] = useState({
        light: '#3f50b5',
        dark: '#1B5E20',
    })
    let [textColor, setTextColor] = useState({
        light: '#fff',
        dark: '#fff',
    })

    const theme = createMuiTheme({
        palette: {
            type: prefersDarkMode ? 'dark' : 'light',
            primary: {
                main: prefersDarkMode ? primaryColor.dark : primaryColor.light,

                contrastText: prefersDarkMode
                    ? textColor.dark
                    : textColor.light,
            },
        },
    })

    return (
        // <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Navigation />
                <Router />
            </ThemeProvider>
        </BrowserRouter>
        // </Provider>
    )
}

export default App
