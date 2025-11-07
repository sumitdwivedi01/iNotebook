import React ,{useContext} from "react";
import { DarkContext } from "../context/Theme/DarkTheme";

function Alert({ alert }) {
    const {theme} = useContext(DarkContext);
  const capitalize = (word) => {
    if(word==='danger'){
        word='error'
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    alert && (
      <div className="liquid-alert position-fixed end-0" role="alert" >
        <span className={`alert-title ${alert.type}`}>
          {capitalize(alert.type)}
        </span>
        <span className={`alert-msg-${theme==='light'?'light':'dark'}`}>: {alert.msg}</span>
      </div>
    )
  );
}

export default Alert;
