const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json("success");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });
  if (!user) res.json({ error: "User Doesn't Exist" });
  else {
    bcrypt.compare(password, user.password).then((match) => {
      if (!match)
        res.json({ error: "Wrong username and password Combination" });
      else {
        res.json("You Logged In");
      }
    });
  }
});
module.exports = router;
