import nodemailer from "nodemailer";

const sendContactEmail = async ({
  name,
  email,
  subject,
  message,
}) => {
  // Create transporter when the function is called,
  // so environment variables are already loaded.
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Verify SMTP configuration
  await transporter.verify();

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Portfolio Contact: ${subject}`,
    text: `
New message from your portfolio

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `,
  });
};

export default sendContactEmail;