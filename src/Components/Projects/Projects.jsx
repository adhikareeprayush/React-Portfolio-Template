import './Projects.css'
import CardTitle from '../CardTitle/CardTitle'
import PropTypes from 'prop-types';
import ProjectView from '../ProjectView/ProjectView';
import Button from '../Button/Button';

const RecentActivity = (props) => {
    return (
        <div className='projects'>
            <CardTitle title={props.title} />
            <div className="d-flex flex-column gap-2">
                <ProjectView />
                <ProjectView />
                <ProjectView />
                <ProjectView />
                <div className="d-flex align-items-center justify-content-end">
                    <Button text="View all" />
                </div>
            </div>
        </div>
    )
}

RecentActivity.propTypes = {
    title: PropTypes.string.isRequired
};

export default RecentActivity