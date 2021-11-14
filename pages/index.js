import React from 'react'

import Map from '../components/shared/Map'
import HomeBody from '../components/home/HomeBody'

export default () => {
    return (
        <div className="homeContainer">
            <div className="homeMap sharedMap">
                <Map />
            </div>
            <HomeBody />
        </div>
    )
}