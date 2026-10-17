import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { supabase } from '../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { 
    name, 
    email, 
    phone, 
    company, 
    productType, 
    quantity, 
    materialFinish, 
    logoPlacement, 
    dimensions, 
    message,
    sampleKit,
    inquiryType
  } = req.body;

  // Validate basic fields (Require email, gracefully fallback for others)
  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Valid email address is required' });
  }

  const senderName = name?.trim() || 'Valued Brand Client';
  const selectedProduct = productType || 'Custom Luxury Packaging';
  const finalMessage = message?.trim() || `Inquiry for ${selectedProduct} (Qty: ${quantity || '300-500 Low MOQ'}, Dimensions: ${dimensions || 'Standard'}, Sample Kit: ${sampleKit ? 'Yes' : 'No'})`;

  // 1. Save to Supabase Database
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      const { error } = await supabase
        .from('inquiries')
        .insert([
          { 
            name: senderName, 
            email, 
            phone: phone || '', 
            company: company || '', 
            box_style: selectedProduct, 
            quantity: quantity || '300-500', 
            material: materialFinish || '', 
            logo_placement: logoPlacement || '', 
            dimensions: dimensions || '', 
            message: finalMessage 
          }
        ]);
      
      if (error) throw error;
      console.log('Inquiry saved to database successfully');
    }
  } catch (dbError) {
    console.error('Error saving inquiry to database:', dbError);
    // Continue with email even if DB fails
  }

  // 2. Create email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // App Password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'Jocylyn@saidepackaging.com, yaowei198299@gmail.com',
    subject: `🚀 [New Inquiry] ${sampleKit ? '📦 SAMPLE KIT REQUEST' : selectedProduct} - ${company || senderName}`,
    text: `
      Name: ${senderName}
      Email: ${email}
      Phone/WhatsApp: ${phone || 'Not provided'}
      Company: ${company || 'Not provided'}
      Inquiry Type: ${inquiryType || (sampleKit ? 'Sample Kit' : 'Custom Quote')}
      Product Type: ${selectedProduct}
      Estimated Quantity: ${quantity || '300-500'}
      Material/Finish: ${materialFinish || 'Standard/TBD'}
      Logo Placement: ${logoPlacement || 'Standard/TBD'}
      Dimensions: ${dimensions || 'Standard/TBD'}
      Sample Kit Requested: ${sampleKit ? 'YES ($19.9 Sample Kit)' : 'No'}
      
      Message:
      ${finalMessage}
    `,
    html: `
      <h2>🚀 New Website Inquiry (High-Conversion Lead)</h2>
      <p><strong>Name:</strong> ${senderName}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone/WhatsApp:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Inquiry Type:</strong> <span style="color:#C9A84C;font-weight:bold;">${inquiryType || (sampleKit ? '📦 $19.9 Sample Kit' : '⚡ Custom Quote')}</span></p>
      <p><strong>Product Type:</strong> ${selectedProduct}</p>
      <p><strong>Estimated Quantity:</strong> ${quantity || '300-500'}</p>
      <p><strong>Material/Finish:</strong> ${materialFinish || 'Standard/TBD'}</p>
      <p><strong>Logo Placement:</strong> ${logoPlacement || 'Standard/TBD'}</p>
      <p><strong>Dimensions:</strong> ${dimensions || 'Standard/TBD'}</p>
      <p><strong>Sample Kit Requested:</strong> ${sampleKit ? '✅ YES ($19.9 Sample Box Kit)' : 'No'}</p>
      <br/>
      <p><strong>Client Notes / Message:</strong></p>
      <p style="background:#f4f4f4;padding:12px;border-radius:8px;">${finalMessage.replace(/\n/g, '<br/>')}</p>
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
