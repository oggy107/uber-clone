import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoib2dneTEwNyIsImEiOiJja3ZtNmY4dzUwd2Z2MnhvdTl6N2V0NGo1In0.LX7l4VohHYFMpz70nCv5qw'

const Map = () => {
    React.useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
        })
    }, [])

    return (
        <div id="map" style={{width: '100%', height: '100%'}}/>            
    )
}

export default Map