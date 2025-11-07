import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { DarkProvider } from './context/Theme/DarkTheme';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <DarkProvider>
        <App />
      </DarkProvider>
  </BrowserRouter>
   </StrictMode>
)
