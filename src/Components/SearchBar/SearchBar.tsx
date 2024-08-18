import React, { useState } from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { fetchCities } from '../../api'
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

    const [searchTerm, setSearchTerm] = useState('');
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    // Hàm xử lý khi nhập vào ô tìm kiếm
    const handleSearchChange = async (e: any) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value) {
            const cityResults = await fetchCities(value);
            setCities(cityResults.data);
        } else {
            setCities([]);
        }
    };

    // Hàm xử lý khi chọn một thành phố
    const handleCityClick = (city: any) => {
        setSelectedCity(city);
        setCities([]); // Ẩn danh sách kết quả sau khi chọn
        setSearchTerm(city.name); // Cập nhật ô tìm kiếm với tên thành phố được chọn
        props.setCity(city.name + ', ' + city.country, city.latitude, city.longitude)
    };

    return (
        <div className='Search' onClick={handleFocus} >
            <div className={`search-bar ${isFocused ? 'focused' : ''}`}  >
                <input
                    type="text"
                    className="search-bar-input"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Nhập tên thành phố..."
                />
                <span className='search-icon'><FontAwesomeIcon icon={faChevronDown} /></span>
            </div>
            <div style={{ position: 'relative' }}>{Array.isArray(cities) && cities.length > 0 && (
                <ul className='search-bar-ul'>
                    {cities.slice(0, 5).map((city: any) => ( // Giới hạn kết quả hiển thị tối đa là 5
                        <li className={`search-bar-results ${isFocused ? 'searchBar-active' : ''}`} key={city.id} onClick={() => handleCityClick(city)}>
                            {city.name}, {city.country}
                        </li>
                    ))}
                </ul>
            )}</div>

        </div>
    )
}
export default SearchBar