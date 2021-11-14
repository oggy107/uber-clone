import React from 'react'
import Link from 'next/link'

import useAuthentication from '../auth/auth'
import SearchForm from '../components/search/SearchForm'

const Search = () => {
    useAuthentication()

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
            </div>
        </div>
    )
}

export default Search
