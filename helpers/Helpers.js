import { parseUrl } from 'next/dist/shared/lib/router/utils/parse-url'
import mapboxgl from 'mapbox-gl'

import { accessToken } from '../config/config'

const fetchData = async (url) => {
    return fetch(url).then(async (resp) => {
        return resp.json().then((data) => {return data}).catch((err) => {console.error("[ERROR]:", err)})
    }).catch((err) => {console.error("[ERROR]:", err)})
}

const getCoordinates = async (location) => {
    const apiUrl = parseUrl(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${accessToken}`).href
    const data = await fetchData(apiUrl)

    return data.features[0].center
}

const addMarker = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
}

export { getCoordinates, fetchData, addMarker }
