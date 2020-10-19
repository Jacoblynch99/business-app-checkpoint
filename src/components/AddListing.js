import { Button, Container, Grid, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import Map from './Map'

const AddListing = (props) => {
    const [listing, setListing] = useState({
        name: '',
        address: 'Earth',
        hours: '',
        description: '',
    })

    const handleTextChange = (e) => {
        const newListing = { ...listing }
        newListing[e.target.id] = e.target.value
        setListing(newListing)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...listing }
        payload.id = props.places.length + 1
        props.addPlace(payload)
        console.log('hello')
    }

    return (
        <Container style={{ marginTop: 40 }}>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="stretch"
            >
                <Grid item style={{ width: '45vw', marginRight: 20 }}>
                    <Grid item style={{ marginTop: 20 }}>
                        <TextField
                            onChange={handleTextChange}
                            placeholder={'Name'}
                            fullWidth={true}
                            id="name"
                        />
                    </Grid>
                    <Grid item style={{ marginTop: 20 }}>
                        <TextField
                            onChange={handleTextChange}
                            placeholder={'Address'}
                            fullWidth={true}
                            id="address"
                        />
                    </Grid>
                    <Grid item style={{ marginTop: 20 }}>
                        <TextField
                            onChange={handleTextChange}
                            placeholder={'Hours (ex. 8AM - 9AM)'}
                            fullWidth={true}
                            id="hours"
                        />
                    </Grid>
                    <Grid item style={{ marginTop: 20 }}>
                        <TextField
                            onChange={handleTextChange}
                            placeholder={'Description'}
                            fullWidth={true}
                            id="description"
                        />
                    </Grid>
                    <Grid item style={{ marginTop: 20 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            style={{
                                paddingLeft: 150,
                                paddingRight: 150,
                            }}
                            onClick={handleSubmit}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Map
                        width={'45vw'}
                        height={'65vh'}
                        address={listing.address}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default AddListing
