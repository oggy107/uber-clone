import React from 'react'
import Link from 'next/link'

import SearchForm from '../components/search/SearchForm'

const search = () => {
    return (
        <div className="searchMajorContainer">
            <div className="searchMinorContainer">
                <Link href="/" >
                    <div className="searchBackBtnContainer">
                        <button className="btn searchBackBtn">
                            <img src="https://img.icons8.com/ios-filled/50/000000/left.png" alt="back"/>
                        </button>
                    </div>
                </Link>
                <SearchForm />
                <div className="searchSavedPlacesContainer">
                    <div className="searchSavedPlacesImgContainer">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
                    </div>
                    <h3>Saved Places</h3>
                </div>
                <Link href="/confirm">
                    <button className="btn searchConfirmBtn">Confirm Locations</button>
                </Link>
            </div>
        </div>
    )
}

export default search
