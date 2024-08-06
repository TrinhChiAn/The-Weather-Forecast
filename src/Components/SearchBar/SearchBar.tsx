import React, { useState } from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
function SearchBar(props: any) {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(!isFocused);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    const handleClick = () => {
        props.setCity();
        setIsFocused(!isFocused);
    };
    return (
        <div className='Search' onClick={handleFocus} >
            <div className={`search-bar ${isFocused ? 'focused' : ''}`}  >
                <input type="text" className="search-bar-input" placeholder="Search for cities" />
                <span className='search-icon'><FontAwesomeIcon icon={faChevronDown} /></span>
            </div>
            <div
                className={`search-bar-results ${isFocused ? 'searchBar-active' : ''}`}
                onClick={handleClick}
            >
                <p>Hanoi, VN</p>
            </div>
        </div>
    )
}
export default SearchBar