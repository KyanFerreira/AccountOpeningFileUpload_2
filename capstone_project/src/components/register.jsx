/* TODO - add your code to create a functional React component that renders a registration form */
import { useEffect, useState } from "react";
//import getSalesforceAccessToken from "../api/api";
//import dotenv from 'dotenv';
import axios from "axios";
//dotenv.config();
//import getSalesforceAccessToken  from "../../server";

//hardcoded stuff
async function getSalesforceAccessToken() {
  const tokenUrl = `https://login.salesforce.com/services/oauth2/token`;
  try {
      const response = await axios.post(tokenUrl, null, {
          params: {
              grant_type: 'password', // This example uses Username-Password OAuth flow
              client_id: '3MVG9XgkMlifdwVCsrdJm8wmHR6azcmfdYD3OmA8hfQQH.ShXd.jADs38DqmkHSwWIXijIqUWvExmdsDogzxH',
              client_secret: '5DBBB8BCB1FB653E509AE280632526ED0947F74EC9509CD2C88D5793B3F61159',
              username: 'integration@00daj00000efjzxeah.com',
              password: 'Test123*!&*&' + 'WbDbIHQH7PKiDjR4u2dKh1Jc'
          }
      });
      return response.data.access_token;
  } catch (error) {
      console.error('Error getting Salesforce access token:', error);
      throw error;
  }
}

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
      const accessToken = await getSalesforceAccessToken();
      
      const response = await fetch(
        "https://interaudibank-dev-ed.develop.my.salesforce.com/services/apexrest/api/Account_Opening/kyanferreira26@gmail.com",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${accessToken}`
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
