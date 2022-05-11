import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appionment from './Pages/Appionment/Appionment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Navbar from './Pages/Share/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto x-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appoinment' element={<Appionment></Appionment>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
