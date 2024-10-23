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
  let addressValue = document.getElementById('address').value;
  let passwordValue = document.getElementById("password").value;
  let usernameValue = document.getElementById("username").value;
  let phoneNumberValue = document.getElementById("phoneNumber").value;
  let accountTypeValue = document.getElementById("accountType").value;
  
  console.log(firstName);
  console.log(lastName);
  console.log(emailValue);
  console.log(addressValue);
  console.log(usernameValue);
  console.log(passwordValue);
  console.log(phoneNumberValue);
  console.log(accountTypeValue);

  try {
    const accessToken = await getSalesforceAccessToken();
    console.log('accessToken', accessToken)
    const response = await fetch(
      "https://interaudibank-dev-ed.develop.my.salesforce.com/services/apexrest/api/Account_Opening/Register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: emailValue,
          address: addressValue,
          username: usernameValue,
          password: passwordValue,
          typeofBankAccount: accountTypeValue,
          phoneNumber: phoneNumberValue,
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

async function loginUser(e){
  /*
  let passwordValue = document.getElementById("passwordLogin").value;
  let usernameValue = document.getElementById("userNameLogin").value;
*/
  try {
    const accessToken = await getSalesforceAccessToken();
    console.log('accessToken', accessToken)
    const response = await fetch(
      "https://interaudibank-dev-ed.develop.my.salesforce.com/services/apexrest/api/Account_Opening//Login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          username: 'random username' /*usernameValue*/,
          password: '343242'/*passwordValue*/,
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

async function getClientDocs(e){
  try {
    const accessToken = await getSalesforceAccessToken();
    console.log('accessToken', accessToken)
    const response = await fetch(
      "https://interaudibank-dev-ed.develop.my.salesforce.com/services/apexrest/api/Client_Documents/a00aj00000MzQAb",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${accessToken}`
        }
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

async function getClientComments(e){
  try {
    const accessToken = await getSalesforceAccessToken();
    console.log('accessToken', accessToken)
    const response = await fetch(
      "https://interaudibank-dev-ed.develop.my.salesforce.com/services/apexrest/api/Client_Documents/a01aj00000cVL3t",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${accessToken}`
        }
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

async function postClientComments(e){
  try {
    const accessToken = await getSalesforceAccessToken();
    console.log('accessToken', accessToken)
    const response = await fetch(
      "https://interaudibank-dev-ed.develop.my.salesforce.com/services/apexrest/api/Client_Documents",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          commentMessage: 'random Text for Paragraghs' ,
          clientDocumentId: 'a01aj00000cVL3u',
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
      <label htmlFor="address">Address:</label>
      <input type="text" id="address" name="address"></input>
      <br></br>
      <br></br>
      <label htmlFor="username">User Name:</label>
      <input type="text" id="username" name="username"></input>
      <br></br>
      <br></br>
      <label htmlFor="password">Password:</label>
      <input type="text" id="password" name="password"></input>
      <br></br>
      <br></br>
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input type="text" id="phoneNumber" name="phoneNumber"></input>
      <br></br>
      <br></br>

      <label htmlFor="accountType">Account Type:</label>
      <select id="accountType"name="accountType">
      <option value="Personal Bank Account">Personal Bank Account</option>
      <option value="Business Bank Account">Business Bank Account</option>
      <option value="Ameraudi Account">Ameraudi Account</option>
      </select>
      
      <br></br>
      <br></br>
      <button  onClick={(e) => registerUser(e)}>Register</button>

      <br></br>
      <br></br>
      

    </form>


    <button  onClick={(e) => getClientDocs(e)}>Check Json For Get</button>
    <button  onClick={(e) => loginUser(e)}>Login User Test</button>
    <button  onClick={(e) => getClientComments(e)}>Client Comments Test</button>
    <button  onClick={(e) => postClientComments(e)}>Client Comments Insert Test</button>


  </>
);
};

export default Register;
