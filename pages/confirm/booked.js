import React from 'react'
import Lottie from 'react-lottie'
import Link from 'next/link'

import useAuthentication from '../../app/auth/auth'

const booked = () => {
    useAuthentication()

    return (
        <div className="bookedContainer">
            <Lottie options={{animationData: require('../../app/assets/lottie/done.json'), loop: false}}/>
            <h1>Have a safe journey</h1>
            <div className="bookedHomeBtnContainer">
                <Link href="/">
                    <button className="btn bookedHomeBtn"><h1>Home</h1></button>
                </Link>
            </div>
        </div>
    )
}

export default booked