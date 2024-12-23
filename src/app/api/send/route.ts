import createDOMPurify from 'dompurify';
import nodemailer from 'nodemailer';
import { JSDOM } from 'jsdom';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const window = new JSDOM('').window;
    const DOMPurify = createDOMPurify(window);

    const sanitizedName = DOMPurify.sanitize(name);
    const sanitizedEmail = DOMPurify.sanitize(email);
    const sanitizedMessage = DOMPurify.sanitize(message);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `GreenDream: New message from ${sanitizedName}`,
      html: `
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">
        </head>
        <body>
          <h3 style="color: #005a2b; font-family: 'Orbitron', sans-serif;">NEW MESSAGE FROM: ${sanitizedName}</h3>
          <p style="font-family: 'Roboto', sans-serif;">${sanitizedMessage}</p>
          <br>
          <p style="color: #00805c; font-family: 'Orbitron', sans-serif;">Please reply to: <a href="mailto:${sanitizedEmail}?subject=Replying to Your message to GreenDream" style="color: #000080; cursor: pointer; font-family: 'Roboto', sans-serif">${email}</a></p>
          <img alt='logo-image' src='https://greendream-2024.vercel.app/images/logo.svg' style="width: 200px;">
        </body>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 },
    );
  }
}
