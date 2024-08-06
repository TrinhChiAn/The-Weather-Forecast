import { faCloudflare } from '@fortawesome/free-brands-svg-icons'
import './index.css'
import SubAir from './SubAir'
import { faDroplet, faTemperatureHalf, faWind } from '@fortawesome/free-solid-svg-icons'

function AirConditon(props: any) {
    return (
        <div>
            <h1 className='content-title AirConditon-title-56'>Air Conditioner</h1>
            <div className="AirCondition-content">
                <SubAir content="12 °C" title="Real Feel" icon={faTemperatureHalf} />
                <SubAir content="3.38 m/s" title="Wind" icon={faWind}/>
                <SubAir content="68 %" title="Clouds" icon={faCloudflare}/>
                <SubAir content="94 %" title="Humidity" icon={faDroplet}/>
            </div>
        </div>
    )
}
export default AirConditon