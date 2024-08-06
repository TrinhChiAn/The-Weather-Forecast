import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './sub.css'
function Sub(props: any){
    return(
        <div className={`subTodayForecast ${props.active&&"active"}`}>
            <p>{props.time}</p>
            <span className='subTodayForecast-icon'><FontAwesomeIcon icon={props.icon} /></span>
            <h1>{props.tem}</h1>
        </div>
    )
}

export default Sub;