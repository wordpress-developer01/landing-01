import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.me.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

transporter.verify((err, success) => {
  if (err) console.error('SMTP error:', err);
  else console.log('SMTP ready');
});

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: 'New message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.send('Message sent');
  } catch (e) {
    console.error(e);
    res.status(500).send('Send error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
