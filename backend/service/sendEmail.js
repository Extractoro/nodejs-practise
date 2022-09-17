const nodemailer = require("nodemailer");
const { USER_EMAIL_META, USER_PASSWORD_META } = process.env;

module.exports = async (body) => {
  const { userName, userEmail, userMessage } = body;

  let transporter = nodemailer.createTransport({
    host: "smtp.meta.ua",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: USER_EMAIL_META, // generated ethereal user
      pass: USER_PASSWORD_META, // generated ethereal password
    },
  });
  const output = `<div>
        <h2>Ви отримали листа від ${userName}, емейл для контактів ${userEmail}.</h2>
        <p>Прислав таке повідомлення: ${userMessage}</p>
    </div>`;

  const options = {
    from: userEmail, // sender address
    to: "olgagordienko3mail@gmail.com", // list of receivers
    subject: "You send form from our website", // Subject line
    text: userMessage, // plain text body
    html: output, // html body
  };

  let info = await transporter.sendMail(options);

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
