const nodemailer = require("nodemailer");

const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_USERNAME = process.env.EMAIL_USERNAME;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_USERNAME,
    pass: EMAIL_PASSWORD,
  }
});

let sendMail = async (from, to, message) => {
  const mailConfigurations = {
    from: from,
    to: to,
    subject: message.subject,
    text: message.text
  };

  const info = await transporter.sendMail({
    from: from,
    to: to,
    subject: message.subject,
    text: message.text
  });

  return info;
}

module.exports = { sendMail };
