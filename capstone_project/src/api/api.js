import axios from 'axios';
import dotenv from 'dotenv';
//dotenv.config();


async function getSalesforceAccessToken() {
    const tokenUrl = `${process.env.SALESFORCE_LOGIN_URL}/services/oauth2/token`;
    try {
        const response = await axios.post(tokenUrl, null, {
            params: {
                grant_type: 'password', // This example uses Username-Password OAuth flow
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                username: process.env.SALESFORCE_USERNAME,
                password: process.env.SALESFORCE_PASSWORD + process.env.SALESFORCE_SECURITY_TOKEN
            }
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting Salesforce access token:', error);
        throw error;
    }
}

export default getSalesforceAccessToken;