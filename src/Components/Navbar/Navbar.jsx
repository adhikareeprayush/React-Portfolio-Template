import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../assets/avatar.svg'
import './Navbar.css';

const Navbar = () => {
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
                        <h4 className="name">Prayush Adhikari</h4>
                        <p className='profession'>Web Developer</p>
                    </div>
                    <img className='avatar' src={avatar} alt="avatar" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
