require("dotenv").config();
const express = require("express");
const router = express.Router();
const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "jaskip2@gmail.com",
  from: "jaskip2@gmail.com",
  subject: "A friend wants to send you a file!",
  text: "Insert url here",
  html: "<strong>Insert url here</strong>"
};

router.get("/", (req, res) => {
  res.send("Hello, world");
});

router.get("/send", (req, res) => {
  sgMail.send(msg);
  console.log("email sent");
  res.send("Email Sent");
});

router.post("/send", (req, res) => {
  const {to, from, subject, text, html} = req.body;
  const msg = {
    to: to,
    from: from,
    subject: subject,
    text: text,
    html: html
  };
  sgMail.send(msg);
  console.log("email sent");
  res.send("Email Sent");
});

module.exports = router;
