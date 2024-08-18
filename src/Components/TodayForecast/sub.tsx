import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './sub.css'
function Sub(props: any){
    const iconCode = props.icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
    return(
        <div className={`subTodayForecast ${props.active&&"active"}`}>
            <p>{props.time}</p>
            <span className='subTodayForecast-icon'><img src={iconUrl} alt="Weather Icon" /></span>
            <h1>{props.tem}</h1>
        </div>
    )
}

export default Sub;