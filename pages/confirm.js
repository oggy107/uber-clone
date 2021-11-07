import React from 'react'

import Map from '../components/shared/Map'
import ConfirmBody from '../components/confirm/ConfirmBody'

const confirm = () => {
    return (
        <div className="confirmContainer">
            <div className="confirmMap sharedMap">
                <Map />
            </div>
            <ConfirmBody />
        </div>
    )
}

export default confirm
