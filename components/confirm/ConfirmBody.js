import React from 'react'

import rides from '../assets/files/carList'
import { getDirections } from '../../helpers/Helpers'

const ConfirmBody = ({pickupCoordinates, dropoffCoordinates}) => {
    const [directions, setDirections] = React.useState({})
    const [isLoading, setIsLoading]  = React.useState(true)
    
    const handleClick = () => {
    }
    
    React.useEffect(async () => {
        const coordinates = `${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}`
        const data = await getDirections('driving', coordinates)
        setDirections(data)
        setIsLoading(false)
    }, [])

    if (isLoading)
    {
        return (
            <div className="confirmBody">
                <h2>loading...</h2>
            </div>
        )
    }


    if (directions)
    {
        return (
            <div className="confirmBody">
                <Header />
                <RideSelection directions={directions}/>
                <button className="confirmConfirmBtn btn" onClick={() => {handleClick()}}>Confirm UberX</button>
            </div>
        )
    }
    else
    {
        return (
            <div className="confirmBody">
                <h2>flying ubers are not yet available</h2>
            </div>
        )
    }

}

const Header = () => {
    return (
        <div className="confirmHeaderContainer">
            <p>chose a ride</p>
        </div>
    )
}

const RideSelection = ({directions}) => {
    return (
        <div className="confirmRideSelectionContainer">
            {
                rides.map((ride, index) => {
                    return (
                        <div className="confirmRideContainer" key={index}>
                            <div className="confirmRideProfileContainer">
                                <img className="confirmRideImg" src={ride.imgUrl} alt={ride.service} />
                                <div>
                                    <h3 className="confirmRideName">{ride.service}</h3>
                                    <p className="confirmRideArrivalTime">5 min away</p>
                                </div>
                            </div>
                            <p className="confirmRidePrice">{`$${(directions.distance * ride.multiplier).toFixed(2)}`}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ConfirmBody
