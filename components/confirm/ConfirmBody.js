import React from 'react'
import Link from 'next/link'

import rides from '../assets/files/carList'

const ConfirmBody = () => {
    return (
        <div className="confirmBody">
            <Link href="/search">
                <div className="confirmBackBtnContainer">
                    <button className="btn confirmBackBtn">
                        <img src="https://img.icons8.com/ios-filled/50/000000/left.png" alt="back"/>
                    </button>
                </div>
            </Link>
            <Header />
            <RideSelection />
            <button className="confirmConfirmBtn btn">Confirm UberX</button>
        </div>
    )
}

const Header = () => {
    return (
        <div className="confirmHeaderContainer">
            <p>chose a ride</p>
        </div>
    )
}

const RideSelection = () => {
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
                            <p className="confirmRidePrice">$0.00</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ConfirmBody
