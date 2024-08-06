import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function CurrentWeather(props: any) {
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
                    <span className='current-weather-icon'><FontAwesomeIcon icon={props.icon} /></span>
                </div>
            </div>
        </div>
    )
}
export default CurrentWeather