import { faCloud, faCloudRain, faCloudShowersHeavy, faCloudSun } from '@fortawesome/free-solid-svg-icons'
import './index.css'
import Sub from './sub'
function TodayForecast(props: any) {
    const getLocalTime = (timezone: any) => {
        const now = new Date();
        const localDate = new Date(now.getTime() + (timezone - 7 * 3600) * 1000);
        const hours = localDate.getHours().toString().padStart(2, '0');
        const minutes = localDate.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };
    const getNextHoursInSameDay = (forecastData: any[], currentDate: Date) => {
        const currentDay = currentDate.getDate();
        const currentHour = currentDate.getHours();
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
            return day == currentDay && hours > currentHour;
        });
    };
    const nextHours = getNextHoursInSameDay(props.forecast, props.date)
    function extractTime(dateTime: String) {
        const parts = dateTime.split(' ');

        const timePart = parts[1];

        const [hours, minutes, giay] = timePart.split(':');

        return `${hours}:${minutes}`;
    }
    console.log(props.forecast)
    return (
        <div className="today-forecast">
            <h1 className='content-title AirConditon-title'>TODAY'S FORECAST</h1>
            <p>{nextHours.length} available forecasts</p>
            <div className="today-forecast--content">
                <ul>
                    {
                        nextHours.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Sub time={extractTime(item?.dt_txt)} tem={`${item.main.temp} °C`} icon={item.weather[0].icon} active />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodayForecast