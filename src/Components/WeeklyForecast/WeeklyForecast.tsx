import { faCloudRain, faCloudShowersHeavy, faCloudShowersWater, faCloudSun, faCloudSunRain, faSun } from '@fortawesome/free-solid-svg-icons'
import './index.css'
import SubWeekly from './SubWeekly'
function WeeklyForecast(props: any) {

    const getNextDay = (forecastData: any[], date: Date) => {
        const currentDay = date.getDate();
        if (!Array.isArray(forecastData)) {
            console.error('Dữ liệu không hợp lệ: forecastData không phải là mảng');
            return [];
        }
        return forecastData.filter(item => {
            const parts = item.dt_txt.split(' ');

            const timePart = parts[1];
            const datePart = parts[0];
            const [hours, minutes, giay] = timePart.split(':');
            const [year, munth, day] = datePart.split('-');
            // Lọc các mục có cùng ngày và giờ lớn hơn giờ hiện tại
            return hours == '00' && day>currentDay;
        });
    };

    const nextDays = getNextDay(props.forecast, props.date);
    console.log(nextDays)
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const convertTimestampToDate = (timestamp: any, timezoneOffset = 0) => {
        // Chuyển timestamp từ giây sang mili giây và cộng thêm offset múi giờ
        const date = new Date((timestamp + timezoneOffset) * 1000);
        return date.getDay();
    };

    return (
        <div>
            <h1 className='content-title'>Weekly Forecast</h1>
            <div className='weeklyforecast-content'>
                
            <ul>
                    {
                        nextDays.map((item, index) => {
                            return (
                                <li key={index}>
                                    <SubWeekly icon={item.weather[0].icon} date={daysOfWeek[convertTimestampToDate(item.dt,props.timezone)]} sky={item.weather[0].description} tem={`${item.main.temp} °C`} cloud={` ${item.clouds.all} %`} wind={`${item.wind.speed} m/s`} humidity={` ${item.main.humidity} %`} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}
export default WeeklyForecast

