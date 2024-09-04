import './Hero.css'
import Timer from '../Timer/Timer'
import Card from '../Card/Card'
import Projects from '../Projects/Projects'
import RecentActivity from '../RecentActivity/RecentActivity'
import activity from '../../assets/activity.svg'
import folder from '../../assets/folder.svg'
import work from '../../assets/work.svg'
import Members from '../Members/Members'
import DateTime from '../DateTime/DateTime'


const Hero = () => {
    return (
        <div className='hero'>
            <div className="d-flex justify-content-between">
                <DateTime />
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
            <div className="d-flex justify-content-between mt-4">
                <RecentActivity title="Recent Activity" />
                <Projects title="Projects" />
            </div>
            <div className="d-flex justify-content-between mt-4">
                <Members title="Members" />
            </div>

        </div>
    )
}

export default Hero
