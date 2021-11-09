import React from 'react'
import { useRouter } from 'next/dist/client/router'

import Map from '../components/shared/Map'
import ConfirmBody from '../components/confirm/ConfirmBody'
import { getCoordinates, addMarker } from '../helpers/Helpers'

const Confirm = () => {
    const [pickupCoordinates, setPickupCoordinates] = React.useState([])
    const [dropoffCoordinates, setDropoffCoordinates] = React.useState([])
    const router = useRouter()

    React.useEffect(async () => {
        const locations = router.query

        const pickup = await getCoordinates(locations.pickup)
        const dropOff = await getCoordinates(locations.dropoff)
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
