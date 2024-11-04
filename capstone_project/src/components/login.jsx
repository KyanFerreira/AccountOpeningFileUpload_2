import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { loginUser } from "../api/api";
import { FaUser, FaLock  } from "react-icons/fa";


const Login = ({setDocumentList}) => {
  const navigate = useNavigate();

  return (
      <div className="loginWrapper">
        <h1> Login Page</h1>
        <form className="RegisterForm">
        <div className="input-box">
          {/* <label htmlFor="username">User Name:</label> */}
          <input type="text" id="username" placeholder="Username" name="username" required></input>
          <FaUser className="icon"/>
        </div>
        <div className="input-box">
          {/* <label htmlFor="password">Password:</label> */}
          <input type="text" id="password" placeholder="Password" name="password"></input>
          <FaLock className="icon" />
        </div>
          <button onClick={async (e) => {await loginUser(e, setDocumentList); navigate('/username')}}>Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    );
  
    
  };
  
  export default Login;