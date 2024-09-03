import './Hero.css'
import Date from '../Date/Date'
import Timer from '../Timer/Timer'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="d-flex justify-content-between">
                <Date />
                <Timer />
            </div>
        </div>
    )
}

export default Hero
