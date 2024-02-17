//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
//import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  /*const [alert, setAlert] = useState('null');
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }*/
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#310202'
    //showAlert("Dark Mode has been Enabled","Success");
    }
    else{ 
    setMode('light');
    document.body.style.backgroundColor='white'
    //showAlert("Light Mode has been Enabled","Success");
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
    {/*<Alert alert={alert}/>*/}
    <div className="container">
    
      <Routes>
          <Route exact path="About" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm heading="Welcome to  text converter, Enter your text" mode={mode} />} />
      </Routes>
 
        </div>
         </BrowserRouter>
    </>
  );
}

export default App;
