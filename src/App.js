import {Routes, Route} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Home from './Components/Home';

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/login"  element={<Login/>}/>
        <Route path="home"  element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
