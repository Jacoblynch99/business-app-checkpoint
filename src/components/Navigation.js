import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import cookie from 'cookie'

const Navigation = (props) => {
    console.log(props.loggedIn)

    const checkAuth = () => {
        const cookies = cookie.parse(document.cookie)

        return cookies['loggedIn'] ? true : false
    }

    const logOut = (e) => {
        document.cookie = 'loggedIn=false'
        window.location.replace('/login')
    }

    if (!props.loggedIn) {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography style={{ flexGrow: 1, fontSize: 18 }}>
                        Lubbock Restaurants
                    </Typography>
                    <ul
                        style={{
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <li style={{ marginRight: 20, color: 'white' }}>
                            <Link
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                to="/"
                            >
                                List
                            </Link>
                        </li>
                        <li
                            style={{
                                marginRight: 20,
                            }}
                        >
                            <Link
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                to="/login"
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        )
    } else {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography style={{ flexGrow: 1, fontSize: 18 }}>
                        Lubbock Restaurants
                    </Typography>
                    <ul
                        style={{
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <li style={{ marginRight: 20, color: 'white' }}>
                            <Link
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                to="/"
                            >
                                List
                            </Link>
                        </li>
                        <li
                            style={{
                                marginRight: 20,
                            }}
                        >
                            <Link
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                to="/add"
                            >
                                Add
                            </Link>
                        </li>
                        <li
                            style={{
                                marginRight: 20,
                            }}
                        >
                            <Link
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                onClick={logOut}
                            >
                                Log Out
                            </Link>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navigation

// <ul>
//     <li>
//
//     </li>
//     <li>
//
//     </li>
//     <li>
//         <Link to="/add">Add Listing</Link>
//     </li>
//     <li>
//         <Link to="/edit">Edit</Link>
//     </li>
// </ul>
