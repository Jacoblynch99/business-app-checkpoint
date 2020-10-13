import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Navigation = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>Hello!</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation
