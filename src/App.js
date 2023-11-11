import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const defAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const changeTheme = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      defAlert("Light mode has been enabled", "success");
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = '#000';
      defAlert("Dark mode has been enabled", "success");
    }
  }

  return (
    <Router>
      <>
        <Navbar title='Textutils' aboutText='About' theme={mode} changeTheme={changeTheme} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<TextForm defAlert={defAlert} heading='Enter the Text' theme={mode} />} />
            <Route exact path='/About' element={<About theme={mode}/>} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;