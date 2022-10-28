const express = require("express");

const { sendMail } = require("../mailer");

const router = express.Router();

// send mail
router.post("/", async function(req, res) {
  const { from, to, message } = req.body;

  let messageInfo
  try {
    messageInfo = await sendMail(from, to, message);
  } catch(e) {
    console.error(e)
    return res.status(500).send({ error: "Sending email failed" });
  }

  return res.status(200).send({messageInfo});
});

module.exports = router;
