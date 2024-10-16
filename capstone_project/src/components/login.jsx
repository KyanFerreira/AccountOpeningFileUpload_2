import { useEffect, useState } from "react";

const Login = ({setToken}) => {
    const [loggedIn, setLoggedIn] = useState(null)
  
      async function loginUser() {
      let emailValue = document.getElementById("email").value;
      let passwordValue = document.getElementById("password").value;
      
      console.log(emailValue);
      console.log(passwordValue);
      
      try{
          const response = await fetch(
              "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: emailValue,
                  password: passwordValue,
                }),
              }
            );
            const result = await response.json();
            
            console.log(result);
            console.log(result.token);
            setToken(result.token);
            consoleLog(token);
  
      }catch(e){
          console.log(e);
      }
    }
    return (
      <>
        <h1> Login Page</h1>
  
        <form className="RegisterForm">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email"></input>
          <br></br>
          <br></br>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" name="password"></input>
          <br></br>
          <br></br>
          <button type="button" >Login</button>
        </form>
      </>
    );
  
    
  };
  
  export default Login;