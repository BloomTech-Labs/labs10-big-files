require("dotenv").config();
const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.get("/", (req, res) => {
  res.send("Hello, world");
});

router.post("/send", (req, res) => {
  const {
    body_to,
    body_from,
    body_subject,
    body_text,
    body_html,
    body_url
  } = req.body;
  const msg = {
    to: body_to,
    from: body_from,
    subject: body_subject,
    text: "hard code test",
    html: body_html,
    template_id: "d-cfdd9e9c01914f909b38fef4016bba70",
    dynamic_template_data: {
      toemail: body_to,
      fromemail: body_from,
      body: body_text,
      URL: body_url
    }
  };
  sgMail.send(msg);
  console.log("email sent");
  res.send("Email Sent");
});

module.exports = router;
