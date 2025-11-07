import React, { useContext } from 'react';
import { NavLink, Link } from "react-router-dom";
import ThemeButton from './Themebutton';
import { DarkContext } from "../context/Theme/DarkTheme";
import {useNavigate} from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const { theme } = useContext(DarkContext);
  const handleLogout =()=>{
    localStorage.removeItem('token');
    navigate("/login")
  }

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-gradient`} style={{
        background: theme === "dark"
          ? "linear-gradient(177.6deg, rgba(20,0,113,1) 15.3%, rgba(1,0,62,1) 91.3%)"
          : "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)",
        borderBottom: `2px solid ${theme === "dark" ? "white" : "#7d9be1"}`
      }}>
        <div className="container-fluid">
          <NavLink className={`navbar-brand `} style={{ color: `${theme === 'dark' ? 'white' : '#0F172A'}` }} to="/"> <h2>iNotebook</h2></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='${theme === 'dark' ? "%23fff" : "%23333"}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
              }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={`nav-link ${(navinfo) => (navinfo.isActive ? 'active' : '')}`} aria-current="page" to="/" style={{ fontSize: "20px" }} style={{ color: `${theme === 'dark' ? 'white' : '#0F172A'}` }}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${(navinfo) => (navinfo.isActive ? 'active' : '')}`} to="/about" style={{ fontSize: "20px" }} style={{ color: `${theme === 'dark' ? 'white' : '#0F172A'}` }}>About</NavLink>
              </li>
            </ul>

            { !localStorage.getItem('token')?<div className="buttons d-flex">
               <Link className={`btn btn-outline-${theme === 'dark' ? 'light' : 'dark'} px-4 py-2 mx-2 rounded-pill fw-semibold shadow-sm custom-btn`}
                to="/login"role="button"> Login </Link>
              <Link className="btn btn-primary px-4 py-2 mx-2 rounded-pill fw-semibold shadow-sm custom-btn"to="/signup"role="button"> SignUp </Link> 
            </div>: <button className="btn btn-primary px-4 py-2 mx-2 rounded-pill fw-semibold shadow-sm custom-btn" onClick={handleLogout} > LogOut </button>}
            <ThemeButton /> 
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
