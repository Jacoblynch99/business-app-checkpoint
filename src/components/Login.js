import React, { useState, useEffect } from 'react'
import { Container, TextField, Button } from '@material-ui/core'

const Login = (props) => {
    let [state, setState] = useState({
        username: '',
        password: '',
    })

    const handleTextChange = (e) => {
        const prevState = { ...state }
        prevState[e.target.name] = e.target.value
        setState(prevState)
    }

    const login = (e) => {
        e.preventDefault()
        props.login(true)
        document.cookie = 'loggedIn=true;max-age=80*1000'
    }

    return (
        <div className="App">
            <Container maxWidth="sm">
                <form className="login-form" onSubmit={login}>
                    <TextField
                        required
                        onChange={handleTextChange}
                        value={state.username}
                        name="username"
                        label="Username"
                        type="text"
                    />
                    <TextField
                        required
                        onChange={handleTextChange}
                        value={state.password}
                        name="password"
                        label="Password"
                        type="password"
                    />
                    <Button
                        type="submit"
                        className="login-button"
                        variant="contained"
                        color="primary"
                    >
                        Login
                    </Button>
                </form>
            </Container>
        </div>
    )
}

export default Login
