import Signup from '../src/pages/login/signup'
// import Navbar from './components/navbar';
import Home from './pages/home/home';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Createvault from './pages/createvault/createvault';
import Viewvault from './pages/viewvault/viewvault';
// import './App.css';

function App() {
  return (
    // <Signup/>
    
      <Router>
        <Routes>
          <Route path="/" element ={ <Signup />}/>
          <Route path='/home' element ={<Home/>}/>
          <Route path='/createvault' element={<Createvault/>}/>
          <Route path='/viewvault/:id' element={<Viewvault/>}/>
        </Routes>
      </Router>
    
  );
}

export default App;
