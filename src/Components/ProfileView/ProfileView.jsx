import './ProfileView.css'
import avatar from '../../assets/avatar.svg'

const ProfileView = () => {
    return (
        <div className='profile-view'>
            <div className="details">
                <img src={avatar} alt="Avatar" />
                <p className="name">Prayush Adhikari</p>
            </div>
            <a href="" className='view-all'>View All</a>
        </div>
    )
}

export default ProfileView
