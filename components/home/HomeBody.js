import React from 'react'
import Link from 'next/link'

import actionBtns from '../assets/files/actionBtns'

const HomeBody = () => {
    return (
        <div className="homeBody">
            <Header />
            <ActionButtons />
            <button className="btn homeWhereToBtn" onClick={() => {Link}}>Where to?</button>
        </div>
    )
}

const Header = ({children}) => {
    return (
        <div className="homeHeader">
            <img className="homeLogo" src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' alt="Logo"/>
            <div className="homeProfileContainer">
                <p className="homeProfileName">Oggy107</p>
                <div className="homeProfilePicContainer">
                    <img className="homeProfilePic" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGZdRECCmtuHX8ichGgbPJaUa2PzhY-kdohA&usqp=CAU' alt='profile pic'/>
                </div>
            </div>
        </div>
    )
}

const ActionButtons = () => {
    return (
        <div className="homeActionBtnsContainer">
            {
                actionBtns.map((btn, index) => {
                    return (
                        <Link href={btn.href} key={index}>
                            <button className='btn homeSingleActionBtnContainer'>
                                <img className="homeActionBtnImg" src={btn.img} alt={btn.title}/>
                                <h4 className="homeActionBtnTitle">{btn.title}</h4>
                            </button>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default HomeBody