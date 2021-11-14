import React from 'react'
import Lottie from 'react-lottie'

const login = () => {
    return (
        <div className="loginContainer">
            <div className="loginLogoContainer">
                <img src="https://i.ibb.co/n6LWQM4/Post.png" alt="logo" />
            </div>
            <div className="loginAnimationContainer">
                <Lottie options={{animationData: require('../components/assets/lottie/car-loading.json')}}/>
            </div>
            <h1>Log in to access your account</h1>
            <div className="loginBtnContainer">
                <button className="btn"><h2>Sign in with Google</h2></button>
            </div>
        </div>
    )
}

export default login
