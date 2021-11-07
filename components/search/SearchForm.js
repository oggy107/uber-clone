import React from 'react'

const SearchForm = () => {
    return (
        <div className="searchFormContainer">
            <div className="searchFormImgContainer">
                <img style={{width: "15px"}} src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                <img style={{height: "30px"}} src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                <img style={{width: "15px"}} src="https://img.icons8.com/windows/50/000000/square-full.png" />
            </div>
            <div className="searchFormInputContainer">
                <input style={{marginBottom: '15px'}} type="text" name="pickup" className="input" placeholder="Enter pickup location"/>
                <input type="text" name="whereto" className="input" placeholder="Where to?"/>
            </div>
            <div className="searchFormAddBtnMajorContainer">
                <div className="searchFormAddBtnMinorContainer">
                    <img src="https://img.icons8.com/ios/50/000000/plus-math.png" />
                </div>
            </div>
        </div>
    )
}

export default SearchForm
