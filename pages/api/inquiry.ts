import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, country, company, industry, message } = req.body;

  // Validate basic fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Create email transporter
  // Note: These env variables should be set in Vercel
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // App Password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'andy@saidepackaging.com, yaowei198299@gmail.com',
    subject: `New Inquiry from ${name} - ${company || 'No Company'}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone/WhatsApp: ${phone}
      Country: ${country}
      Company: ${company}
      Industry: ${industry}
      
      Message:
      ${message}
    `,
    html: `
      <h2>New Website Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone/WhatsApp:</strong> ${phone}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Industry:</strong> ${industry}</p>
      <br/>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  };

  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('Inquiry received but email credentials missing:', req.body);
      return res.status(200).json({ 
        message: 'Inquiry received (Mock Mode - No Email Sent)', 
        data: req.body 
      });
    }

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Inquiry sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending inquiry' });
  }
}
