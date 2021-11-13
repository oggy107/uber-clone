import React from 'react'
import { useRouter } from 'next/dist/client/router'

const SearchForm = () => {
    const [pickup, setPickup] = React.useState('')
    const [dropoff, setDropoff] = React.useState('')
    const router = useRouter()

    const handleClick = (eo) => {
        eo.preventDefault()

        if (pickup && dropoff)
            router.push(`/confirm?pickup=${pickup}&dropoff=${dropoff}`)

        // CAN ADD USER FEEDBACK
    }

    return (
        <form>
            <div className="searchFormContainer">
                <div className="searchFormImgContainer">
                    <img style={{width: "15px"}} src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                    <img style={{height: "30px"}} src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                    <img style={{width: "15px"}} src="https://img.icons8.com/windows/50/000000/square-full.png" />
                </div>
                <div className="searchFormInputContainer">
                    <input onChange={(eo) => {setPickup(eo.target.value)}} style={{marginBottom: '15px'}} type="text" name="pickup" className="input" placeholder="Enter pickup location"/>
                    <input onChange={(eo) => {setDropoff(eo.target.value)}} type="text" name="whereto" className="input" placeholder="Where to?"/>
                </div>
                <div className="searchFormAddBtnMajorContainer">
                    <div className="searchFormAddBtnMinorContainer">
                        <img src="https://img.icons8.com/ios/50/000000/plus-math.png" />
                    </div>
                </div>
            </div>
            <div className="searchSavedPlacesContainer">
                <div className="searchSavedPlacesImgContainer">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
                </div>
                <h3>Saved Places</h3>
            </div>
            <button type="submit" onClick={(eo) => {handleClick(eo)}} className={(pickup && dropoff) ? "btn searchConfirmBtn" : "btn searchConfirmBtn disabled"}>Confirm Locations</button>
        </form>
    )
}

export default SearchForm
