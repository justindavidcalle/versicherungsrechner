
import './App.css';
import Main from './pages/main';
import Navbar from './components/Navbar';
import Contactform from './pages/contactform';
import Imprint from './pages/imprint';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Navbar/>
    <div className='container'>
      <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/contactform" element={<Contactform/>} />
      <Route path="/imprint" element={<Imprint/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
