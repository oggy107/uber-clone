import React from 'react'
import Lottie from 'react-lottie'
import Link from 'next/link'

import rides from '../../assets/files/carList'
import { getDirections } from '../../helpers/Helpers'

const ConfirmBody = ({pickupCoordinates, dropoffCoordinates}) => {
    const [directions, setDirections] = React.useState({})
    const [isLoading, setIsLoading]  = React.useState(true)

    React.useEffect(async () => {
        const coordinates = `${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}`
        const data = await getDirections('driving', coordinates)
        setDirections(data)
        setIsLoading(false)
    }, [pickupCoordinates, dropoffCoordinates])

    if (isLoading)
    {
        return (
            <div className="confirmBody">
                <Lottie options= {{animationData: require('../../assets/lottie/loading.json')}}/>
            </div>
        )
    }

    if (directions)
    {
        return (
            <div className="confirmBody">
                <Header />
                <RideSelection directions={directions}/>
            </div>
        )
    }
    else
    {
        return (
            <div className="confirmBody">
                <Lottie width='100%' height='50%' options={{animationData: require('../../assets/lottie/dragon.json')}}/>
                <h2 style={{textAlign: 'center', marginTop: 50}}>prefer riding this instead</h2>
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
    const [selected, setSelected] = React.useState(0)

    const handleClick = (index) => {
        setSelected(index)
    }

    return (
        <div className="confirmRideSelectionContainer">
            {
                rides.map((ride, index) => {
                    return (
                        <div onClick={() => {handleClick(index)}} className={(selected === index) ? "confirmRideContainer selected" : "confirmRideContainer"} key={index}>
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
            <Link href="/confirm/booked">
                    <button className="confirmConfirmBtn btn">Confirm {rides[selected].service}</button>
            </Link>
        </div>
    )
}

export default ConfirmBody
