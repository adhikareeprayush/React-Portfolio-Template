import './Hero.css'
import Date from '../Date/Date'
import Timer from '../Timer/Timer'
import Card from '../Card/Card'
import activity from '../../assets/activity.svg'
import folder from '../../assets/folder.svg'
import work from '../../assets/work.svg'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="d-flex justify-content-between">
                <Date />
                <Timer />
            </div>
            <div className="d-flex justify-content-between mt-5">
                <Card title="Weekly Activity" progress="0%" image={activity}
                />
                <Card title="Worked This Week" progress="40:00:05" image={work}
                />
                <Card title="Project Worked" progress="02" image={folder}
                />
            </div>
        </div>
    )
}

export default Hero
