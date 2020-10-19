import {
    Paper,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Table,
    TableBody,
    Button,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'
import cookie from 'cookie'

require('dotenv').config()

const Listings = (props) => {
    const checkAuth = () => {
        const cookies = cookie.parse(document.cookie)

        return cookies['loggedIn'] ? true : false
    }

    if (!props.loggedIn) {
        return (
            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Hours</TableCell>
                                <TableCell>Address</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.places.map((place) => {
                                return (
                                    <TableRow key={place.name}>
                                        <TableCell component="th" scope="row">
                                            <Link
                                                to={`/restaurant/${place.id}`}
                                            >
                                                {place.name}
                                            </Link>
                                        </TableCell>
                                        <TableCell align="left">
                                            {place.description}
                                        </TableCell>
                                        <TableCell align="right">
                                            {place.hours}
                                        </TableCell>
                                        <TableCell align="right">
                                            {place.address}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        )
    } else {
        return (
            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Hours</TableCell>
                                <TableCell>Address</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.places.map((place, idx) => {
                                return (
                                    <TableRow key={place.name}>
                                        <TableCell component="th" scope="row">
                                            <Link
                                                to={`/restaurant/${place.id}`}
                                            >
                                                {place.name}
                                            </Link>
                                        </TableCell>
                                        <TableCell align="left">
                                            {place.description}
                                        </TableCell>
                                        <TableCell align="right">
                                            {place.hours}
                                        </TableCell>
                                        <TableCell align="right">
                                            {place.address}
                                        </TableCell>
                                        <TableCell
                                            onClick={() =>
                                                props.removePlace(idx)
                                            }
                                            align="right"
                                        >
                                            <Button>DELETE</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        )
    }
}

export default Listings
