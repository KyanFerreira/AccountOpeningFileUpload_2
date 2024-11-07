/* TODO - add your code to create a functional React component that renders a registration form */
import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { getSalesforceAccessToken, registerUser, loginUser } from "../api/api";
//import getSalesforceAccessToken from "../api/api";
//import dotenv from 'dotenv';
import axios from "axios";
//dotenv.config();
//import getSalesforceAccessToken  from "../../server";

//hardcoded stuff


const Register = ({setDocumentList, setUsername, setPassword, setToken}) => {
  const navigate = useNavigate();


  // async function getClientDocs(e) {
  //   try {
  //     const accessToken = await getSalesforceAccessToken();
  //     console.log("accessToken", accessToken);
  //     const response = await fetch(
  //       "https://interaudibank-dev-ed.develop.my.salesforce.com/services/apexrest/api/Client_Documents/a00aj00000MzQAb",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     );
  //     const result = await response.json();
  //     console.log(result);
  //     console.log(result.token);
  //     //setToken(result.token);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  

  // async function getBankAccountInfo(e) {
  //   try {
  //     const accessToken = await getSalesforceAccessToken();
  //     console.log("accessToken", accessToken);
  //     const response = await fetch(
  //       "https://interaudibank-dev-ed.develop.my.salesforce.com/services/apexrest/api/Bank_Information",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     );
  //     const result = await response.json();
  //     console.log(result);
  //     console.log(result.token);
  //     //setToken(result.token);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  //What will be returned to the App page
  return (
    <>
      <div className="loginWrapper">
      <h1> Register Page</h1>
        <form className="RegisterForm">
          <div className="input-box">
            {/* <label htmlFor="firstname">First Name:</label> */}
            <input type="text" id="firstname" placeholder="First Name" name="firstname" required></input>
          </div>
          <div className="input-box">
            {/* <label htmlFor="lastname">Last Name:</label> */}
            <input type="text" id="lastname" placeholder = "Last Name" name="lastname"></input>
          </div>
          <div className="input-box">
            {/* <label htmlFor="email">Email:</label> */}
            <input type="text" id="email" placeholder="Email" name="email"></input>
          </div>
          <div className="input-box">
            {/* <label htmlFor="address">Address:</label> */}
            <input type="text" id="address" placeholder="Address" name="address"></input>
          </div>
          <div className="input-box">
            {/* <label htmlFor="username">User Name:</label> */}
            <input type="text" id="username" placeholder="Username" name="username"></input>
          </div>
          <div className="input-box">
            {/* <label htmlFor="password">Password:</label> */}
            <input type="text" id="password" placeholder="Password" name="password"></input>
          </div>
          <div className="input-box">
            {/* <label htmlFor="phoneNumber">Phone Number:</label> */}
            <input type="text" id="phoneNumber" placeholder="Phone Number" name="phoneNumber"></input>
          </div>

          <label htmlFor="accountType">Account Type:</label>
          <select id="accountType" name="accountType">
            <option value="Personal Bank Account">Personal Bank Account</option>
            <option value="Business Bank Account">Business Bank Account</option>
            <option value="Ameraudi Account">Ameraudi Account</option>
          </select>
          <button onClick={async (e) => {await registerUser(e, setDocumentList, setUsername, setPassword, setToken); navigate('/username')}}>Register</button>
        </form>
        <div className="register-link">
            <p>Have an Account Already? <a onClick={() => navigate(`/`)}>Login</a></p>
          </div>

      </div>
    </>
  );
};

export default Register;
