import React from 'react'

import Map from '../components/shared/Map'
import ConfirmBody from '../components/confirm/ConfirmBody'
import { getCoordinates, addMarker } from '../helpers/Helpers'

const Confirm = () => {
    const [pickupCoordinates, setPickupCoordinates] = React.useState([])
    const [dropoffCoordinates, setDropoffCoordinates] = React.useState([])

    React.useEffect(async () => {
        const pickup = await getCoordinates('Santa Monica');
        const dropOff = await getCoordinates('los Angeles')
        setPickupCoordinates(pickup)
        setDropoffCoordinates(dropOff)
    }, [])

    return (
        <div className="confirmContainer">
            <div className="confirmMap sharedMap">
                <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates}/>
            </div>
            <ConfirmBody />
        </div>
    )
}

export default Confirm
