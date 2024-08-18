import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function CurrentWeather(props: any) {
    const iconCode = props.icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
    return (
        <div>
            <h1 className='content-title'>Current Weather</h1>
            <div className="current-weather-content">
                <div className="current-weather-content--col1">
                    <h1>{props.city}</h1>
                    <h4>{props.date}</h4>
                </div>
                <div className="current-weather-content--col2">
                    <h1>{props.tem}</h1>
                    <h4>{props.sky}</h4>
                </div>
                <div className="current-weather-content--col3">
                    <span className='current-weather-icon'><img src={iconUrl} alt="Weather Icon" /></span>
                </div>
            </div>
        </div>
    )
}
export default CurrentWeather