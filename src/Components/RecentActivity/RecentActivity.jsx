import './RecentActivity.css'
import Project from '../Project/Project'
import ProfileView from '../ProfileView/ProfileView'
import CardTitle from '../CardTitle/CardTitle'
import PropTypes from 'prop-types';

const RecentActivity = (props) => {
    return (
        <div className='big-card'>
            <CardTitle title={props.title} />
            <ProfileView />
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}

RecentActivity.propTypes = {
    title: PropTypes.string.isRequired
};

export default RecentActivity
