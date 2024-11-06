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


const Register = ({ setDocumentList }) => {
  const [selectedFile, setSelectedFile] = useState(null);
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

  async function getClientComments(e) {
    try {
      const accessToken = await getSalesforceAccessToken();
      console.log("accessToken", accessToken);
      const response = await fetch(
        "https://interaudibank-dev-ed.develop.my.salesforce.com/services/apexrest/api/Client_Documents/a01aj00000cVL3t",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const result = await response.json();
      console.log(result);
      console.log(result.token);
      //setToken(result.token);
    } catch (e) {
      console.log(e);
    }
  }

  async function postClientComments(e) {
    try {
      const accessToken = await getSalesforceAccessToken();
      console.log("accessToken", accessToken);
      const response = await fetch(
        "https://interaudibank-dev-ed.develop.my.salesforce.com/services/apexrest/api/Client_Documents",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            commentMessage: "random Text for Paragraghs",
            clientDocumentId: "a01aj00000cVL3u",
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      console.log(result.token);
      //setToken(result.token);
    } catch (e) {
      console.log(e);
    }
  }

  async function getBankAccountInfo(e) {
    try {
      const accessToken = await getSalesforceAccessToken();
      console.log("accessToken", accessToken);
      const response = await fetch(
        "https://interaudibank-dev-ed.develop.my.salesforce.com/services/apexrest/api/Bank_Information",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const result = await response.json();
      console.log(result);
      console.log(result.token);
      //setToken(result.token);
    } catch (e) {
      console.log(e);
    }
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileChange = async (event) => {
    let base64 = await convertBase64(event.target.files[0]);
    base64 = base64.split(',')[1];
    setSelectedFile(base64);
    console.log(event.target.files[0]);
    let name = event.target.files[0].name;
    //console.log(base64);


    try {
      const accessToken = await getSalesforceAccessToken();
      console.log("accessToken", accessToken);
      const response = await fetch(
        "https://interaudibank-dev-ed.develop.my.salesforce.com/services/data/v62.0/sobjects/ContentVersion/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            Title: name,
            PathOnClient: name,
            ContentLocation: "S",
            VersionData: base64,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      console.log(result.token);
      //setToken(result.token);
    } catch (e) {
      console.log(e);
    }
  };

  const contentDocumentLink = async (event) => {
   
    try {
      const accessToken = await getSalesforceAccessToken();
      console.log("accessToken", accessToken);
      const response = await fetch(
        "https://interaudibank-dev-ed.develop.my.salesforce.com/services/apexrest/api/Client_Doc_File_Upload",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            contentDocID: "069aj000007xyAb",
            clientDocumentId: "a01aj00000ddXEh",
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      console.log(result.token);
      //setToken(result.token);
    } catch (e) {
      console.log(e);
    }
  };




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
          <button onClick={async (e) => {await registerUser(e, setDocumentList); navigate('/username')}}>Register</button>
        </form>
        <div className="register-link">
            <p>Have an Account Already? <a href="#">Login</a></p>
          </div>

      </div>
      

      <button onClick={(e) => getClientDocs(e)}>Check Json For Get</button>
      <button onClick={(e) => loginUser(usernameInput, passwordInput)}>Login User Test</button>
      <button onClick={(e) => getClientComments(e)}>
        Client Comments Test
      </button>
      <button onClick={(e) => postClientComments(e)}>
        Client Comments Insert Test
      </button>
      <button onClick={(e) => getBankAccountInfo(e)}>
        Bank Account info Test
      </button>

      <button onClick={(e) => contentDocumentLink()}>
        Connect To ClientDocument
      </button>

      <label htmlFor="avatar">Choose a profile picture:</label>
      <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/png, image/jpeg, application/pdf"
        onChange={handleFileChange}
      />
    </>
  );
};

export default Register;
