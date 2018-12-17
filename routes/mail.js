const nodemailer = require('nodemailer');
module.exports = (function() {
    'use strict';
    const mailRoutes = require('express').Router();

    mailRoutes.post('/send', function (req, res) {
         //secure: true for 465, false for other ports
            let transporter = nodemailer.createTransport({
               host: 'smtp.livemail.co.uk',
               port: 465,
               secure: true,
               auth: {
                   user: process.env.MAIL_USER,
                   pass: process.env.MAIL_PASS
               },
           });

            let text= req.body.name+' is requesting a chat. Send them an emial by clicking "Replay" button. ';
            text+= req.body.mobile? 'You could also contact them directly on '+req.body.mobile+'.':'';
            const mailOptions = {
              from: process.env.MAIL_USER,
              to: 'kopczkrzy@gmail.com',
              replyTo: req.body.mail,
              subject: 'Chat request received.',
              text
            };

            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
    });

    return mailRoutes;
})();
