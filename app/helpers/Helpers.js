import mapboxgl from 'mapbox-gl'
import { parseUrl } from 'next/dist/shared/lib/router/utils/parse-url'

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

const getDirections = async (profile, coordinates) => {
    const apiUrl = `https://api.mapbox.com/directions/v5/mapbox/${profile}/${coordinates}?access_token=${accessToken}`
    const data = await fetchData(apiUrl)
    console.log(data)
    if (data.code === 'Ok')
        {
            return {
                distance: data.routes[0].distance / 1000,
                duration: data.routes[0].duration
            }
        }
        else
            return null
}

export { getCoordinates, fetchData, addMarker, getDirections }
