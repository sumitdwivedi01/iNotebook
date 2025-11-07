import{useContext} from 'react';
import Notes from "./Notes";
import { DarkContext } from "../context/Theme/DarkTheme";
const Home = ({showAlert}) => {
  const {theme} = useContext(DarkContext);
  return (
    <div style={{color:`${theme==='dark'?'white':'#0F172A'}`}}>
      <Notes showAlert={showAlert}/>
    </div>
  )
}

export default Home
