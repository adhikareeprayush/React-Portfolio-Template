import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';

function App() {

  return (
    <div className='app'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
