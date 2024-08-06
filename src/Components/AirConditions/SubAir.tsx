import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './sub.css'
function SubAir(props: any) {
    return (
        <div className='AirCondition' >
            <p><span className='AirCondition-icon'><FontAwesomeIcon icon={props.icon} /></span> {props.title}</p>
            <h1>{props.content}</h1>
        </div>
    )
}

export default SubAir;