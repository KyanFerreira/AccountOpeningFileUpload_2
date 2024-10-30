import axios from 'axios';
import dotenv from 'dotenv';
import { useParams, useNavigate} from "react-router-dom";



async function getSalesforceAccessToken() {
    const tokenUrl = `https://interaudibank-dev-ed.develop.my.salesforce.com/services/oauth2/token`;
    try {
      console.log("process.env", process.env);
      console.log(
        "process.env.REACT_APP_SALESFORCE_PASSWORD",
        process.env.REACT_APP_SALESFORCE_PASSWORD
      );
      console.log(
        "process.env.REACT_APP_SALESFORCE_SECURITY_TOKEN",
        process.env.REACT_APP_SALESFORCE_SECURITY_TOKEN
      );
      const response = await axios.post(tokenUrl, null, {
        params: {
          grant_type: "password", // This example uses Username-Password OAuth flow
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          username: process.env.REACT_APP_SALESFORCE_USERNAME,
          password:
            process.env.REACT_APP_SALESFORCE_PASSWORD +
            process.env.REACT_APP_SALESFORCE_SECURITY_TOKEN,
        },
      });
  
      console.log(response.data.access_token);
      return response.data.access_token;
    } catch (error) {
      console.error("Error getting Salesforce access token:", error);
      throw error;
    }
  }

async function registerUser(e, setDocumentList) {
    e.preventDefault();
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let emailValue = document.getElementById("email").value;
    let addressValue = document.getElementById("address").value;
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
      console.log("accessToken", accessToken);
      const response = await fetch(
        "https://interaudibank-dev-ed.develop.my.salesforce.com/services/apexrest/api/Account_Opening/Register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
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
      const parsedResult = await JSON.parse(result);
      setDocumentList(parsedResult);
      //console.log(result.token);
      //setToken(result.token);
    } catch (e) {
      console.log(e);
    }
  }

//   async function getClientDocs(setCurrentComments) {
//     try {
//       const accessToken = await getSalesforceAccessToken();
//       console.log("accessToken", accessToken);
//       const response = await fetch(
//         "https://interaudibank-dev-ed.develop.my.salesforce.com/services/apexrest/api/Client_Documents/a01aj00000dbPUa",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );
//       const result = await response.json();
//       console.log(result);
//       const parsedResult = await JSON.parse(result);
//       console.log(parsedResult);
//       setCurrentComments(parsedResult);
//     } catch (e) {
//       console.log(e);
//     }
//   }

async function getClientComments(setCurrentComments, Id) {
    console.log(Id);
    try {
      const accessToken = await getSalesforceAccessToken();
      console.log("accessToken", accessToken);
      const response = await fetch(
        `https://interaudibank-dev-ed.develop.my.salesforce.com/services/apexrest/api/Client_Documents/${Id}`,
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
      const parsedResult = await JSON.parse(result);
      setCurrentComments(parsedResult);
    } catch (e) {
      console.log(e);
    }
  }

export {getSalesforceAccessToken, registerUser, getClientComments}

//export default getSalesforceAccessToken;