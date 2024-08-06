import { faCloudRain, faCloudShowersHeavy, faCloudShowersWater, faCloudSun, faCloudSunRain, faSun } from '@fortawesome/free-solid-svg-icons'
import './index.css'
import SubWeekly from './SubWeekly'
function WeeklyForecast(props: any) {
    return (
        <div>
            <h1 className='content-title'>Weekly Forecast</h1>
            <div className='weeklyforecast-content'>
                <SubWeekly icon={faCloudShowersHeavy} date="Wednesday" sky="moderate rain" tem="8 °C" cloud="74 %" wind="2.70 m/s" humidity="82 %" />
                <SubWeekly icon={faCloudShowersWater} date="Thursday" sky="moderate rain" tem="8 °C" cloud="74 %" wind="2.70 m/s" humidity="82 %" />
                <SubWeekly icon={faCloudShowersWater} date="Friday" sky="moderate rain" tem="8 °C" cloud="74 %" wind="2.70 m/s" humidity="82 %" />
                <SubWeekly icon={faCloudRain} date="Saturday" sky="moderate rain" tem="8 °C" cloud="74 %" wind="2.70 m/s" humidity="82 %" />
                <SubWeekly icon={faCloudSunRain} date="Sunday" sky="few clouds" tem="8 °C" cloud="74 %" wind="2.70 m/s" humidity="82 %" />
                <SubWeekly icon={faSun} date="Monday" sky="clear sky" tem="8 °C" cloud="74 %" wind="2.70 m/s" humidity="82 %" />
            </div>

        </div>
    )
}
export default WeeklyForecast

