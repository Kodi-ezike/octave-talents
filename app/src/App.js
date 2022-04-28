import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import LogFooter from './Components/LogFooter';
import Join from './Components/Join';
import { Routes, Route } from 'react-router-dom';
function App() {

  return (
  <div className='App'>
    
    <Header/>
    
        <Routes>
          <Route path='/' element={<Join/>}/> 
          <Route path='/login' element={<Login/>}/> 
          <Route path='/logfooter' element={<LogFooter/>}/> 
        </Routes>
      
        </div>
  );
}

export default App;
