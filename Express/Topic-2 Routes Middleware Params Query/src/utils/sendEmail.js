import transporter from "../config/nodeMailer.js";

const sendEmail = async ({ to, subject, html }) => {
  const info = await transporter.sendMail({
    from: `"Train With Raj" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });

  return info;
};

export default sendEmail;
