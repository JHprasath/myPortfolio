import './component/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Servicepage from './component/Servicepage';
import Projectpage from './component/Projectpage';
import Homepage from './component/Homepage';
import Aboutpage from './component/Aboutpage';
import Resumepage from './component/Resumepage';
import Contactpage from './component/Contactpage';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import SplashCursor from './SplashCursor'
function App() {
  return (
    <div className="App">
      

<SplashCursor />
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about' element={<Aboutpage/>} />
        <Route path='/resume' element={<Resumepage/>} />
        <Route path='/service' element={<Servicepage/>} />
        <Route path='/project' element={<Projectpage/>} />
        <Route path='/contact' element={<Contactpage/>} />
      </Routes>
    
    
    </div>
  );
}

export default App;
