/*************************************************************
 *
 * Execution       : default node cmd> node app.js
 * Purpose         : Mail sender using NodeJS
 *
 * @description    : Transporting mail with from, to, subject
 *                   fields, body using nodemailer and dotenv 
 *
 * @file           : app.js
 * @overview       : Sending mail using nodemailer
 * @module         : Node.js, nodemailer, dotenv
 * @version        : 1.0
 * @since          : 13/10/2020
 *
 * **********************************************************/

// step-1
require('dotenv').config();
const mailer = require('nodemailer');

//step-2
const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
})

//step-3
let body = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: "This is test email",
    html: `<h2>Test email by Harshita</h2><br>
            <p>This is paragraph test email</p>`
}

transporter.sendMail(body, (err, result) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log(result);
})