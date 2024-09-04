import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";


function App() {


  return (
    <div className='app'>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Sidebar />
        <Main />
      </SignedIn>
    </div>
  )
}

export default App
