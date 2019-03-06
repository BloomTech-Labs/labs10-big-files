require("dotenv").config();
const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.get("/", (req, res) => {
  res.send("Hello, world");
});

router.post("/send", (req, res) => {
  const { to, from, subject, text, html, url } = req.body;
  const msg = {
    to: to,
    from: rom,
    subject: subject,
    text: text,
    html: html,
    template_id: "d-cfdd9e9c01914f909b38fef4016bba70",
    dynamic_template_data: {
      toemail: to,
      fromemail: from,
      body: text,
      URL: url
    }
  };
  sgMail.send(msg);
  console.log("email sent");
  res.send("Email Sent");
});

module.exports = router;
