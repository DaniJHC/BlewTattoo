const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send', (req, res) => {
    const { firstName, lastName, master, description } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'New Tattoo Appointment Request',
        text: `Name: ${firstName} ${lastName}\nMaster: ${master}\nDescription: ${description}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error); // выводим ошибку в консоль для дополнительной диагностики
            return res.status(500).send('There was an error sending the email.');
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
