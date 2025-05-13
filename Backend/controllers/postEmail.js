require('dotenv').config(); // FIXED: add the parentheses
const { PASSWORD, MAIL } = process.env;
const nodemailer = require('nodemailer');

const postEmail = async (req, res) => {
  try {
    const { from, subject, text } = req.body;

    const config = {
      service: 'gmail',
      port: 465, // FIXED: correct port for Gmail
      secure: true, // FIXED: must match the port
      auth: {
        user: MAIL,
        pass: PASSWORD,
      },
    };

    const message = {
      from: MAIL, // OPTIONAL: makes it clearer
      to: "yuiftw05@gmail.com",
      subject,
      text: `Mail sent by ${from}: ${text}`,
    };

    const transport = nodemailer.createTransport(config);

    const info = await transport.sendMail(message);
    res.status(200).send("Mail sent successfully");
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = postEmail;
