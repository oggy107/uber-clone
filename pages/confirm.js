import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

import Map from '../components/shared/Map'
import ConfirmBody from '../components/confirm/ConfirmBody'
import { getCoordinates, addMarker } from '../helpers/Helpers'

const Confirm = () => {
    const [pickupCoordinates, setPickupCoordinates] = React.useState([])
    const [dropoffCoordinates, setDropoffCoordinates] = React.useState([])
    const [isloading, setIsLoading] = React.useState(true)
    const router = useRouter()

    React.useEffect(async () => {
        const locations = router.query

        const pickup = await getCoordinates(locations.pickup)
        const dropOff = await getCoordinates(locations.dropoff)

        setPickupCoordinates(pickup)
        setDropoffCoordinates(dropOff)

        setIsLoading(false)

        // getCoordinates(locations.pickup).then((pickup) => {
        //     setPickupCoordinates(pickup)
        //     getCoordinates(locations.dropoff).then((dropoff) => {
        //         setDropoffCoordinates(dropoff)
        //         setIsLoading(false)
        //     })
        // })
    }, [])

    if (isloading)
    {
        return (
            <div className="confirmContainer">
                <h2>loading.....</h2>
            </div>
        )
    }

    return (
        <div className="confirmContainer">
            <Link href="/search">
                <div className="confirmBackBtnContainer">
                    <button className="btn confirmBackBtn">
                        <img src="https://img.icons8.com/ios-filled/50/000000/left.png" alt="back"/>
                    </button>
                </div>
            </Link>
            <div className="confirmMap sharedMap">
                <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates}/>
            </div>
            <ConfirmBody pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates}/>
        </div>
    )
}

export default Confirm
