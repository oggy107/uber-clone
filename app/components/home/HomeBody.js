import React from 'react'
import Link from 'next/link'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/dist/client/router'

import actionBtns from '../../assets/files/actionBtns'
import { auth } from '../../config/firebase'

const defaultUser = {
    name: 'Anonymous',
    profilePic: 'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png'
}

const HomeBody = () => {
    const [user, setUser] = React.useState(defaultUser)
    const router = useRouter()

    React.useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (user)
            {
                setUser({
                    name: user.displayName,
                    profilePic: user.photoURL,
                })
            }
            else
            {
                setUser(defaultUser)
                router.push('/login')
            }
        })
    }, [])

    return (
        <div className="homeBody">
            <Header user={user}/>
            <ActionButtons />
            <button className="btn homeWhereToBtn" onClick={() => {Link}}>Where to?</button>
        </div>
    )
}

const Header = ({user}) => {
    return (
        <div className="homeHeader">
            <img className="homeLogo" src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' alt="Logo"/>
            <div className="homeProfileContainer">
                <p className="homeProfileName">{user.name}</p>
                <div className="homeProfilePicContainer" onClick={() => {signOut(auth)}}>
                    <img className="homeProfilePic" src={user.profilePic} alt='profile pic'/>
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