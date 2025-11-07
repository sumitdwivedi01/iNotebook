
import './App.css'
import {useContext , useEffect , useState} from 'react';
import { Routes, Route ,Link } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import { DarkContext } from "./context/Theme/DarkTheme";
import ViewNote from './components/ViewNote';


function App() {
  const {theme} = useContext(DarkContext);
  

  useEffect(() => {
    if (theme === 'dark') {
    document.body.style.background="#000B18";

  } else {
     document.body.style.backgroundImage ="linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)";
  }
  }, [theme]);
  const [alert, setAlert] = useState(null);
  const showAlert =(message , type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  return (
    
    <NoteState>
    <>
    <Navbar/>
    <div className="line"></div>
      <Alert alert={alert} />
    <div className={`container `}>
    <Routes>
  
        <Route path="/" element={<Home showAlert={showAlert} />}/>
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login showAlert={showAlert} />} />
        <Route path="/signup" element={<SignUp showAlert={showAlert} />} />
        <Route path="/viewnote/:id" element={ <ViewNote />} />

      </Routes>      
    </div>
    </>
    </NoteState>
  )
}

export default App
