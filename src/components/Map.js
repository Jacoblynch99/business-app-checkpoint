import React, { useState, useEffect, Component } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import _ from 'underscore'
import { Icon } from '@material-ui/core'
require('dotenv').config()

const mapStyles = {
    width: '40%',
    height: '50%',
}

const AnyReactComponent = ({ text }) => (
    <LocationOnIcon
        color="secondary"
        style={{
            fontSize: 50,
            left: 200,
            top: 200,
        }}
    />
)

class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            center: {
                lat: 0,
                lng: 0,
            },
        }
    }

    componentDidMount() {
        fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.address}&key=${process.env.REACT_APP_API_KEY}`
        )
            .then((res) => res.json())
            .then(
                (data) => {
                    const { lat, lng } = data.results[0].geometry.location
                    this.setState((prevState) => ({
                        isLoaded: true,
                        center: {
                            lat: lat,
                            lng: lng,
                        },
                    }))
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    })
                }
            )
    }

    render() {
        const { error, isLoaded, center } = this.state
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div
                    style={{
                        height: this.props.height,
                        width: this.props.width,
                    }}
                >
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: process.env.REACT_APP_API_KEY,
                        }}
                        defaultCenter={center}
                        defaultZoom={16}
                    >
                        <AnyReactComponent
                            lat={center.lat + 0.0002}
                            lng={center.lng - 0.0001}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            )
        }
    }
}

export default Map
