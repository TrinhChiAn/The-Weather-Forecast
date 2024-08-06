import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './sub.css'
import { faCloud, faDroplet, faTemperatureHalf, faWind } from '@fortawesome/free-solid-svg-icons'
function SubWeekly(props: any) {
    return (
        <div className='subWeekly'>
            <div className="subWeekly-Col1 subWeekly-Col">
                <h1>{props.date}</h1>
                <p><span className='subweek-big-icon'><FontAwesomeIcon icon={props.icon} /></span> {props.sky}</p>
            </div>
            <div className="subWeekly-Col2 subWeekly-Col">
                <p className='subWeekly-Col-text'><span className='subWeek-small-icon'><FontAwesomeIcon icon={faTemperatureHalf} /></span> {props.tem}</p>
                <p className='subWeekly-Col-text'><span className='subWeek-small-icon'><FontAwesomeIcon icon={faCloud} /></span> {props.cloud}</p>
            </div>
            <div className="subWeekly-Col3 subWeekly-Col">
                <p className='subWeekly-Col-text'><span className='subWeek-small-icon'><FontAwesomeIcon icon={faWind} /></span> {props.wind}</p>
                <p className='subWeekly-Col-text'><span className='subWeek-small-icon'><FontAwesomeIcon icon={faDroplet} /></span> {props.humidity}</p>
            </div>
        </div>
    )
}
export default SubWeekly