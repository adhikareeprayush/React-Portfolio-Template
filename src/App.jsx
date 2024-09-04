import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar/Sidebar';
// import Main from './Components/Main/Main';
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Analytics from './Components/Analytics/Analytics';
import TimeSheets from './Components/TimeSheets/TimeSheets';
import Todo from './Components/Todo/Todo';
import Report from './Components/Report/Report';
import Settings from './Components/Settings/Settings';



function App() {

  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const renderContent = () => {
    switch (activeMenu) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Analytics':
        return <Analytics />;
      case 'TimeSheets':
        return <TimeSheets />;
      case 'Todo':
        return <Todo />;
      case 'Report':
        return <Report />;
      case 'Settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className='app'>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <>
          {renderContent()}
        </>
      </SignedIn>
    </div>
  )
}

export default App
