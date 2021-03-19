const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', function(req, res){

    const myMail = 'mymail@gmail.com';
    const myPass = 'mypass'

    const transporter = nodemailer.createTransport({
        service: 'gmail', //al usar un servicio bien conocido, no es necesario proveer un nombre de servidor.
        auth: {
          user: myMail,
          pass: myPass
        }
    });

    req.fields.body = `${req.fields.from} envío el mensaje:\n\n ${req.fields.body}`;
    const mailOptions = {
        from: req.fields.from,
        to: `${myMail}`,
        subject: req.fields.subject,
        text: req.fields.body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
    });

});

module.exports = router;