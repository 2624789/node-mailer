const express = require("express");

const router = express.Router();

// send mail
router.post("/", async function(req, res) {
  const { to, message } = req.body;

  return res.status(200).send({to, message});
});

module.exports = router;
