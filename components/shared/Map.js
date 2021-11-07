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
        })

        if ((pickupCoordinates && dropoffCoordinates) && (pickupCoordinates.length && dropoffCoordinates.length))
        {
            map.setCenter(pickupCoordinates)
            map.zoomTo(8)
            addMarker(map, pickupCoordinates)
            addMarker(map, dropoffCoordinates)
        }
    })

    return (
        <div id="map" style={{flex: 1}}/>
    )
}

export default Map