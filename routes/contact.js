const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', function(req, res){

    const user = 'mymail@gmail.com';
    const pass = 'mypass'

    const transporter = nodemailer.createTransport({
        service: 'gmail', //al usar un servicio bien conocido, no es necesario proveer un nombre de servidor.
        auth: {
          user: `${user}`,
          pass: `${pass}`
        }
    });

    req.fields.body = "Se envío el mensaje:\n\n" + req.fields.body;
    const mailOptions = {
        from: req.fields.from,
        to: `${user}, ${req.fields.from}`,
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