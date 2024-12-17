const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 7000;

const cors = require('cors');
app.use(cors());

// Function to fetch user's diagrams
async function fetchUserDiagrams(accessToken) {
    try {
        const response = await axios.get('https://coggle.it/api/1/diagrams', {
            headers: {
                Authorization: `Bearer ${accessToken}`, // Include the access token
            },
        });

        const diagrams = response.data;
        return diagrams;
    } catch (error) {
        console.error('Error fetching diagrams:', error.response?.data || error.message);
        throw new Error('Failed to fetch diagrams');
    }
}

// API Route to fetch diagrams
app.get('/fetch-diagrams', async (req, res) => {
    const accessToken = process.env.ACCESS_TOKEN; // Replace this with a token management system in production

    if (!accessToken) {
        return res.status(400).send('Access token is missing');
    }

    try {
        const diagrams = await fetchUserDiagrams(accessToken);
        res.json(diagrams);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
