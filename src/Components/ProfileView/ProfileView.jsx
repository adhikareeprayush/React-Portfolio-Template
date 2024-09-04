import './ProfileView.css'
import { useUser } from '@clerk/clerk-react'

const ProfileView = () => {
    const { user } = useUser()
    return (
        <div className='profile-view'>
            <div className="details">
                <div className="image-container">
                    <img src={user?.imageUrl} alt="Avatar" />
                </div>
                <p className="name">{user?.firstName} {user?.lastName}</p>
            </div>
            <a href="" className='view-all'>View All</a>
        </div>
    )
}

export default ProfileView
