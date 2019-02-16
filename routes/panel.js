const express = require("express");
const router = express.Router();
const { createCustomer } = require("../lib/createCustomer");

router.get("/", async (req, res) => {
  const { username, password, admin } = req.body;
  const _id = await createCustomer(username, password, admin);
  res.send(_id);
});

module.exports = router;
