import express from 'express';
import axios from 'axios';

require('dotenv').config();
// //require('dotenv').config(); // To load environment variables securely

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // To handle JSON requests

// // Example API endpoint to retrieve accounts from Salesforce
// app.get('/api/accounts', async (req, res) => {
//     try {
//         // Authenticate with Salesforce and get access token
//         const accessToken = await getSalesforceAccessToken();

//         // Make API request to Salesforce to get Accounts
//         const accounts = await axios.get(`${process.env.SALESFORCE_INSTANCE_URL}/services/data/vXX.X/sobjects/Account`, {
//             headers: {
//                 'Authorization': `Bearer ${accessToken}`
//             }
//         });

//         // Return the Accounts data back to the frontend
//         res.json(accounts.data);
//     } catch (error) {
//         console.error('Error fetching accounts from Salesforce:', error);
//         res.status(500).send('Error fetching accounts');
//     }
// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// Helper function to authenticate with Salesforce
async function getSalesforceAccessToken() {
    const tokenUrl = `${process.env.SALESFORCE_LOGIN_URL}/services/oauth2/token`;
    try {
        const response = await axios.post(tokenUrl, null, {
            params: {
                grant_type: 'password', // This example uses Username-Password OAuth flow
                client_id: process.env.REACT_APP_CLIENT_ID,
                client_secret: process.env.REACT_APP_CLIENT_SECRET,
                username: process.env.REACT_APP_SALESFORCE_USERNAME,
                password: process.env.REACT_APP_SALESFORCE_PASSWORD + process.env.REACT_APP_SALESFORCE_SECURITY_TOKEN
            }
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting Salesforce access token:', error);
        throw error;
    }
}

export default getSalesforceAccessToken;