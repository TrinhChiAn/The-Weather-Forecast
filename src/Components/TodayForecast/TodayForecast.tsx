import { faCloud, faCloudRain, faCloudShowersHeavy, faCloudSun } from '@fortawesome/free-solid-svg-icons'
import './index.css'
import Sub from './sub'
function TodayForecast(props: any){
    return(
        <div className="today-forecast">
            <h1 className='content-title AirConditon-title'>Current Weather</h1>
            <p>5 available forecasts</p>
            <div className="today-forecast--content">
                <Sub time="15:00" tem="26 °C" icon={faCloud} active/>
                <Sub time="16:00" tem="29 °C" icon={faCloudSun}/>
                <Sub time="17:00" tem="25 °C" icon={faCloud}/>
                <Sub time="18:00" tem="23 °C" icon={faCloudRain}/>
                <Sub time="19:00" tem="10 °C" icon={faCloudShowersHeavy}/>

            </div>
        </div>
    )
}
 
export default TodayForecast