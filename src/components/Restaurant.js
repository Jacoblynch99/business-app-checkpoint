import { Container, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Map from './Map'
import Geocode from 'react-geocode'
require('dotenv').config()

const Restaurant = (props) => {
    const id = props.match.params.id
    console.log(id)
    const restaurant = props.places.find((r) => r.id == id)

    return (
        <Container
            style={{
                paddingTop: 40,
                paddingLeft: 300,
                paddingRight: 300,
            }}
        >
            <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="flex-start"
            >
                <Grid item>
                    <Typography
                        variant="h5"
                        style={{
                            fontWeight: 'bold',
                        }}
                    >
                        {restaurant.name}
                    </Typography>
                </Grid>
                <Grid
                    item
                    style={{
                        paddingTop: 20,
                    }}
                >
                    <Typography
                        style={{
                            fontWeight: 'bold',
                        }}
                    >
                        {restaurant.address}
                    </Typography>
                </Grid>
                <Grid
                    item
                    style={{
                        paddingTop: 20,
                    }}
                >
                    <Typography
                        style={{
                            fontWeight: 'bold',
                        }}
                    >
                        {restaurant.hours}
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{
                        paddingTop: 20,
                    }}
                >
                    <Typography> {restaurant.description}</Typography>
                    <Grid
                        item
                        style={{
                            paddingTop: 20,
                            paddingBottom: 40,
                        }}
                    >
                        <Map
                            width={500}
                            height={400}
                            address={restaurant.address}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Restaurant
