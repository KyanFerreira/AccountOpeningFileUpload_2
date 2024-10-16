/* TODO - add your code to create a functional React component that renders a registration form */
import { useEffect, useState } from "react";

const Register = ({setToken}) => {
  
  async function registerUser(e) {
    e.preventDefault();
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let emailValue = document.getElementById("email").value;
    let passwordValue = document.getElementById("password").value;
    /*console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);*/

    try {
      const response = await fetch(
        "https://kyantesting-dev-ed.my.salesforce.com/services/apexrest/Kyan_Testing/api/Account_Opening/kyanferreira26@gmail.com",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Kyan_Testing__First_Name__c: firstName,
            Kyan_Testing__Last_Name__c: lastName,
            Kyan_Testing__Email__c: emailValue,
            Kyan_Testing__Password__c: passwordValue,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      console.log(result.token);
      setToken(result.token);
    } catch (e) {
      console.log(e);
    }
  }

  //What will be returned to the App page
  return (
    <>
      <h1> Register Page</h1>
      <form className="RegisterForm">
        <label htmlFor="firstname">First Name:</label>
        <input type="text" id="firstname" name="firstname"></input>
        <br></br>
        <br></br>
        <label htmlFor="lastname">Last Name:</label>
        <input type="text" id="lastname" name="lastname"></input>
        <br></br>
        <br></br>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email"></input>
        <br></br>
        <br></br>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="password"></input>
        <br></br>
        <br></br>
        <button  onClick={(e) => registerUser(e)}>Register</button>
      </form>
    </>
  );
};

export default Register;
