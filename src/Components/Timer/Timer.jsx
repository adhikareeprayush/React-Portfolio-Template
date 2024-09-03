import './Timer.css'
import rightArrow from '../../assets/arrow-right.svg'

const Timer = () => {
    return (
        <div className='timer'>
            <p>Start Time Tracker</p>
            <img src={rightArrow} alt="" />
        </div>
    )
}

export default Timer
