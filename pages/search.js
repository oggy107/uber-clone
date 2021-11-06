import React from 'react'
import Link from 'next/link'

import SearchForm from '../components/search/SearchForm'

const search = () => {
    return (
        <div className="searchContainer">
            <Link href="/" >
                <button className="btn searchBackBtn">
                    <img src="https://img.icons8.com/ios-filled/50/000000/left.png" alt="back"/>
                </button>
            </Link>
            <SearchForm />
            <div className="searchSavedPlacesContainer">
                <div className="searchSavedPlacesImgContainer">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
                </div>
                <h3>Saved Places</h3>
            </div>
            <button className="btn searchConfirmBtn">Confirm Locations</button>
        </div>
    )
}

export default search
