import React from 'react'
import mapboxgl from 'mapbox-gl'

import { accessToken } from '../../config/config'
import {addMarker} from '../../helpers/Helpers'

mapboxgl.accessToken = accessToken

const Map = ({pickupCoordinates, dropoffCoordinates}) => {

    React.useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 7,
            center: [-73.935242, 40.730610]
        })

        if ((pickupCoordinates && dropoffCoordinates) && (pickupCoordinates.length && dropoffCoordinates.length))
        {
            map.setCenter(pickupCoordinates)
            addMarker(map, pickupCoordinates)
            addMarker(map, dropoffCoordinates)
            map.on('load', () => {map.fitBounds([pickupCoordinates, dropoffCoordinates], {padding: 125})})
        }
    }, [pickupCoordinates, dropoffCoordinates])

    return (
        <div id="map" style={{flex: 1}}/>
    )
}

export default Map