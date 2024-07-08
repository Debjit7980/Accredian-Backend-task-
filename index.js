const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const prisma = new PrismaClient();

const port =5000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// const allowedOrigins=['https://accredian-frontend-task-omega-eight.vercel.app','http://localhost:5173'];
// app.use(cors({
//     origin: allowedOrigins ,  
//     credentials: true,
// }));

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

app.post("/referral", async(req, res) => {
    try {
        //res.status(200).json({ message: 'Referral received!' });
        const {user_name, user_email, course, ref_name, ref_email} = req.body;
        console.log(course, user_name, user_email);

        // if (!user_name || !user_email || !course || !ref_name || !ref_email) {
        //     return res.status(400).json({ error: 'All fields are required' });
        // }


        // const referral = await prisma.referral.create({
        //     data: {
        //         user_name,
        //         user_email,
        //         course,
        //         ref_name,
        //         ref_email
        //     }
        // });

        // //Sending referral email
        // const transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: process.env.GMAIL_USER,
        //         pass: process.env.GMAIL_PASS
        //     }
        // });

        // const mailOptions = {
        //     from: process.env.GMAIL_USER,
        //     to: ref_email,
        //     subject: 'Course Referral',
        //     text: `Hi ${ref_name},\n\n${user_name} has referred you to the ${course} course.\n\nBest regards,\nYour Team`
        // };

        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         console.log('Error sending email:', error);
        //     } else {
        //         console.log('Email sent:', info.response);
        //     }
        // });

        //res.status(200).json(referral);               
        res.status(200).json({ message: 'Form data received successfully' });
    } catch (error) {
        console.error('Error handling request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
