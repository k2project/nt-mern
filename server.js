//loads environment variables from a .env file into process.env
require('dotenv').config()

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());
app.post('/mail/send', (req, res) => {

    // secure: true for 465, false for other ports
    let transporter = nodemailer.createTransport({
       host: 'smtp.livemail.co.uk',
       port: 465,
       secure: true,
       auth: {
           user: process.env.MAIL_USER,
           pass: process.env.MAIL_PASS
       },
       tls: { rejectUnauthorized: false }
   });


    const mailOptions = {
      from: process.env.MAIL_USER,
      to: 'handzon.mmt@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
