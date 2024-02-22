import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';


function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#020833";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
   <>
   <Navbar title="Navabr2" mode={mode} toggleMode={toggleMode}/>
   <div className="container my-3">
    <Textform/>
   </div>
   </>
  );
}

export default App;
