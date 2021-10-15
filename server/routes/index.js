var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });
router.post("/gmail", async function (req, res, next) {
  console.log(req.body);
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      name: "Abdumannon Tojiboev",
      user: "abuzcoder@gmail.com",
      pass: "mannon_2710",
    },
  });
  const html = `
    <div style="padding:15px 20px; box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);">
      <p><strong>Name: </strong><span>${req.body.name}</span></p>
      <p ><strong>E-mail: </strong><span>${req.body.email}</span></p>
      <h3>Message: </h3>
      <pre>${req.body.message}</pre>
    </div>
  `;
  let info = await transporter.sendMail({
    from: "Abdumannon Tojiboev <abuzcoder@gmail.com>", // sender address
    to: "abuzcoder@gmail.com", // list of receivers
    subject: "Global Study Message", // Subject line
    text: "Client name : " + req.body.name, // plain text body
    html: html, // html body
  });
  res.json({ success: "than you" });
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});
module.exports = router;
