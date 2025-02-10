const nodemailer = require('nodemailer');

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service
  auth: {
    user: 'kavetisaiabhinaykumar@gmail.com', // Replace with your email
    pass: 'Saisunny@9', // Replace with your email password
  },
});

// Email sending function
function sendEmail(subject, body) {
    return transporter.sendMail({
      from: '', // Sender address
      to: 'kaveti', // Replace with the recipient's email
      subject: subject,
      text: body,
    });
  }