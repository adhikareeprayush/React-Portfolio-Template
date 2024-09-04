import './Sidebar.css'
import dashboardFill from '../../assets/dashboardFill.svg'
import report from '../../assets/report.svg'
import settings from '../../assets/settings.svg'
import time from '../../assets/time.svg'
import analytic from '../../assets/analytic.svg'
import todo from '../../assets/todo.svg'
import todoFill from '../../assets/todoFill.svg'
import analyticFill from '../../assets/analyticFill.svg'
import settingsFill from '../../assets/settingsFill.svg'
import timeScheduleFill from '../../assets/timeScheduleFill.svg'
import reportFill from '../../assets/reportFill.svg'
import dashboard from '../../assets/dashboard.svg'


const Sidebar = ({ activeMenu, setActiveMenu }) => {

    return (
        <div className="sidebar">
            <h3 className='logo'>TASK<span>Y.</span></h3>
            <div className="menus">
                <div
                    className={`menu-item ${activeMenu === 'Dashboard' ? 'active' : ''}`}
                    onClick={() => setActiveMenu('Dashboard')}
                >
                    <img src={activeMenu === 'Dashboard' ? dashboardFill : dashboard} alt="Dashboard" />
                    <p>Dashboard</p>
                </div>
                <div
                    className={`menu-item ${activeMenu === 'Analytics' ? 'active' : ''}`}
                    onClick={() => setActiveMenu('Analytics')}
                >
                    <img src={activeMenu === 'Analytics' ? analyticFill : analytic} alt="Analytics" />
                    <p>Analytics</p>
                </div>
                <div
                    className={`menu-item ${activeMenu === 'TimeSheets' ? 'active' : ''}`}
                    onClick={() => setActiveMenu('TimeSheets')}
                >
                    <img src={activeMenu === 'TimeSheets' ? timeScheduleFill : time} alt="TimeSheets" />
                    <p>TimeSheets</p>
                </div>
                <div
                    className={`menu-item ${activeMenu === 'Todo' ? 'active' : ''}`}
                    onClick={() => setActiveMenu('Todo')}
                >
                    <img src={activeMenu === 'Todo' ? todoFill : todo} alt="Todo" />
                    <p>Todo</p>
                </div>
                <div
                    className={`menu-item ${activeMenu === 'Report' ? 'active' : ''}`}
                    onClick={() => setActiveMenu('Report')}
                >
                    <img src={activeMenu === 'Report' ? reportFill : report} alt="Report" />
                    <p>Report</p>
                </div>
                <div
                    className={`menu-item ${activeMenu === 'Settings' ? 'active' : ''}`}
                    onClick={() => setActiveMenu('Settings')}
                >
                    <img src={activeMenu === 'Settings' ? settingsFill : settings} alt="Settings" />
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}

//props validation
Sidebar.defaultProps = {
    activeMenu: 'Dashboard',
    setActiveMenu: () => { }
}

export default Sidebar
