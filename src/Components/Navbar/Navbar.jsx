import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
    const { user } = useUser();
    return (
        <nav className='navbar'>
            <div className="nav-title d-flex align-items-center gap-5">
                <FontAwesomeIcon className='bars' icon={faBars} />
                <h3>Dashboard</h3>
            </div>
            <div className="search">
                <input type="text" placeholder='Search Project...' />
                <FontAwesomeIcon className='search-icon' icon={faSearch} />
            </div>
            <div className="d-flex align-items-center justify-content-center gap-5">
                <div className="notifications">
                    <FontAwesomeIcon className='bell' icon={faBell} />
                    <div className="notification-count">3</div>
                </div>
                <div className="user-details">
                    <div>
                        <h4 className="name">{user?.firstName} {user?.lastName}</h4>
                        <p className='profession'>Web Developer</p>
                    </div>
                    <div className="user-btn-container">
                        <UserButton />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
