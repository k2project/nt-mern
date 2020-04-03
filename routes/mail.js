//working update:01.04.2020
//jSOn must have double quotes around text
const nodemailer = require("nodemailer");
module.exports = (function() {
    "use strict";
    const mailRoutes = require("express").Router();

    mailRoutes.post("/send", function(req, res) {
        const { name, mail, mobile, location } = req.body;
        if (!name) {
            return res.send({
                success: false,
                message: "Your name is required."
            });
        }
        if (!mail && !mobile) {
            return res.send({
                success: false,
                message:
                    "Please enter at last one way to contact you or call me directly on  0208 675 9754."
            });
        }
        const emailRegex = /[a-z0-9!#$%&"*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&"*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (mail && !emailRegex.test(mail)) {
            return res.send({
                success: false,
                message:
                    "Please enter a valid address or send an emial directly to georgie@calvocoressi.com."
            });
        }
        const mobRegex = /^[+]?(\d+([- ])?)*$/;
        if (mobile && !mobRegex.test(mobile)) {
            return res.send({
                success: false,
                message:
                    "Please enter a valid mobile number or call me directly on  02086759754."
            });
        }
        console.log(location);
        if (!location) {
            return res.send({
                success: false,
                message: "Please indicate at what place you wish to see me."
            });
        }

        //secure: true for 465, false for other ports
        let transporter = nodemailer.createTransport({
            host: "smtp.livemail.co.uk",
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            },
            // tls: {
            //      rejectUnauthorized: false
            //  }
        });

        let text =
            req.body.name +
            " is requesting a meeting at " +
            req.body.location +
            " .";
        text += req.body.mail
            ? " Email them back by clicking on the 'Reply' button"
            : "";
        let replyTo = req.body.mail ? req.body.mail : "";
        text +=
            req.body.mobile && !req.body.mail
                ? " Contact them directly only by mobile on " + req.body.mobile
                : "";
        text +=
            req.body.mobile && req.body.mail
                ? " or call " + req.body.mobile
                : "";
        text += ".";
        const mailOptions = {
            from: process.env.MAIL_USER,
            to: process.env.MAIL_USER,
            replyTo,
            subject: "Consultation request received.",
            text
        };
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
                res.send({
                    error
                });
            } else {
                // console.log("Email sent: " + info.response);
                res.send({
                    success: true
                });
            }
        });
    });

    return mailRoutes;
})();
