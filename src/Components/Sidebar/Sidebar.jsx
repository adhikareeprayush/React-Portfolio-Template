import './Sidebar.css'
import dashboard from '../../assets/dashboard.svg'
import report from '../../assets/report.svg'
import settings from '../../assets/settings.svg'
import time from '../../assets/time.svg'
import analytic from '../../assets/analytic.svg'
import todo from '../../assets/todo.svg'



const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3 className='logo'>TASK<span>Y.</span></h3>
            <div className="menus">
                <div className="menu-item active">
                    <img src={dashboard} alt="" />
                    <p>Dashboard</p>
                </div>
                <div className="menu-item">
                    <img src={analytic} alt="" />
                    <p>Analytics</p>
                </div>
                <div className="menu-item">
                    <img src={time} alt="" />
                    <p>TimeSheets</p>
                </div>
                <div className="menu-item">
                    <img src={todo} alt="" />
                    <p>Todo</p>
                </div>
                <div className="menu-item">
                    <img src={report} alt="" />
                    <p>Report</p>
                </div>
                <div className="menu-item">
                    <img src={settings} alt="" />
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
