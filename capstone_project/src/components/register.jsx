/* TODO - add your code to create a functional React component that renders a registration form */
import { useEffect, useState } from "react";
//import getSalesforceAccessToken from "../api/api";
//import dotenv from 'dotenv';
import axios from "axios";
//dotenv.config();
//import getSalesforceAccessToken  from "../../server";

//hardcoded stuff

async function getSalesforceAccessToken() {
  const tokenUrl = `https://interaudibank-dev-ed.develop.my.salesforce.com/services/oauth2/token`;
  try {
    console.log('process.env',process.env)
    console.log('process.env.REACT_APP_SALESFORCE_PASSWORD',process.env.REACT_APP_SALESFORCE_PASSWORD)
    console.log('process.env.REACT_APP_SALESFORCE_SECURITY_TOKEN',process.env.REACT_APP_SALESFORCE_SECURITY_TOKEN)
      const response = await axios.post(tokenUrl, null, {
          params: {
            grant_type: 'password', // This example uses Username-Password OAuth flow
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET,
            username: process.env.REACT_APP_SALESFORCE_USERNAME,
            password: process.env.REACT_APP_SALESFORCE_PASSWORD + process.env.REACT_APP_SALESFORCE_SECURITY_TOKEN
          }
      });


      console.log(response.data.access_token);
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
    console.log(firstName);
    console.log(lastName);
    console.log(emailValue);
    console.log(passwordValue);

    try {
      const accessToken = await getSalesforceAccessToken();
      console.log('accessToken', accessToken)
      const response = await fetch(
        "https://interaudibank-dev-ed.develop.salesforce.com/services/apexrest/api/Account_Opening/kyanferreira26@gmail.com",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${accessToken}`
          },
          body: JSON.stringify({
            First_Name__c: firstName,
            Last_Name__c: lastName,
            Email__c: emailValue,
            Password__c: passwordValue,
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
