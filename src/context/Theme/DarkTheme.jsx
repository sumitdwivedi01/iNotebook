import React ,{createContext , useState} from 'react'

 const DarkContext = createContext();
const DarkProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme')||'light');
    
  return <DarkContext.Provider value={{theme , setTheme}}>
    {children}
  </DarkContext.Provider>
  
}
export {DarkProvider , DarkContext};

