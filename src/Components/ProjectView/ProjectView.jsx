import './ProjectView.css'
import projectFolder from '../../assets/project-folder.svg'

const ProjectView = (props) => {
    return (
        <div className='project-view'>
            <div className="d-flex align-items-center gap-3">
                <div className="image">
                    <img src={projectFolder} alt="" />
                </div>
                <p>Project one</p>
            </div>
            <div className="time-count">
                00:40:00
            </div>
            <div className="progress-bar">
                
            </div>
        </div>
    )
}

export default ProjectView
