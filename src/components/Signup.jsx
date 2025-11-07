import React ,{useContext , useState}from 'react';
import { DarkContext } from "../context/Theme/DarkTheme";
import {useNavigate} from "react-router-dom";
const SignUp = ({showAlert}) => {
  const navigate = useNavigate();
    const {theme} = useContext(DarkContext);
    const [credentials, setCredentials] = useState({name:"",email:"",password:"" ,cpassword:""})
    const handleClickSubmit= async(e)=>{
      e.preventDefault();
      const {name , email , password}=credentials;
      try {
        const response = await fetch("http://localhost:5000/api/auth/createuser" ,{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({ name ,email ,password })

    });
    const json = await response.json();
    console.log(json);
    if(json.success){
        localStorage.setItem('token', json.authToken);
        showAlert("Successfully Signed Up" ,"success");
        navigate("/");
    }
    else{
      showAlert("Invalid Credentials Try Again with Correct one" ,"danger");
    }
      } catch (error) {
         showAlert("SignUp Failed Due To Internal Sever Error" ,"danger");
         console.log(error);
      }
}
const onChange=(e)=>{
    setCredentials({...credentials ,[e.target.name]:e.target.value })
}


  return (
    <div className="container" onSubmit={handleClickSubmit}>
      <form>
                <div className="mb-3">
                    <label htmlFor="name" className={`form-label text-${theme==='dark'?'light':'dark'}`}>Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={onChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className={`form-label text-${theme==='dark'?'light':'dark'}`}>Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} required/>
                    <div id="emailHelp" className={`form-text text-${theme==='dark'?'light':'dark'}`}>We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className={`form-label text-${theme==='dark'?'light':'dark'}`}  >Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className={`form-label text-${theme==='dark'?'light':'dark'}`}  >Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required />
                </div>
                <button disabled={credentials.password !== credentials.cpassword || credentials.password.length < 5 }  type="submit" className="btn btn-primary" >Get Started</button>
            </form>
    </div>
  )
}

export default SignUp;
