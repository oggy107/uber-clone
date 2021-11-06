import React from 'react'

import Map from '../components/home/Map'
import HomeBody from '../components/home/HomeBody'

// Home page

export default () => {
    return (
        <div className="homeContainer">
            <Map />
            <HomeBody />
        </div>
    )
}