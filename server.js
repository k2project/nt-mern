//loads environment variables from a .env file into process.env
require('dotenv').config()

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());
//mail routes
const mailRoutes = require('./routes/mail');
app.use('/mail', mailRoutes);

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
