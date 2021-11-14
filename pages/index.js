import React from 'react'

import Map from '../app/components/shared/Map'
import HomeBody from '../app/components/home/HomeBody'

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