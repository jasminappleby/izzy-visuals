import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

// Configure your email service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Use app-specific password for Gmail
  },
});

app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, surname, email, interested, proposedDate, location, message } = req.body;

    // Validate required fields
    if (!firstName || !email || !interested || !proposedDate || !location || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Email to send to your inbox
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'Izzyvisuals14@gmail.com',
      subject: `Photography Enquiry from ${firstName}`,
      html: `
        <h2>New Photography Enquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interested In:</strong> ${interested}</p>
        <p><strong>Proposed Date:</strong> ${proposedDate}</p>
        <p><strong>Event Location:</strong> ${location}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
