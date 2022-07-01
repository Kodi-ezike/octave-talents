import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import HomeFooter from './Components/HomeFooter';
//import LogFooter from './Components/LogFooter';
import ScrollArrow from './Components/ScrollArrow';
import Join from './Components/Join';
import FreelancerSignUp from './Components/FreelancerSignUp';
import ClientSignUp from './Components/ClientSignUp';
import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    <div className='App'>
    
      <Header/>
    
        <Routes>
          <Route path='/' element={<Join/>}/> 
          <Route path='/login' element={<Login/>}/> 
          <Route path='/freelancer' element={<FreelancerSignUp/>}/> 
          <Route path='/client' element={<ClientSignUp/>}/>
        </Routes>
        <ScrollArrow/>
      <HomeFooter/>
      
    </div>
  );
}

export default App;
