const router = require("express").Router();
const verifyToken = require("../utils/verifyToken");
const jwt = require("jsonwebtoken");
const User = require("./../models/User");

const dotenv = require("dotenv");
dotenv.config();

router.get("/balance", verifyToken, async (req, res) => {
  const decoded = jwt.decode(req.header("authToken"));
  const data = await User.findOne(
    { username: decoded.username },
    { _id: 1, username: 1, balance: 1 }
  );
  res.send(data);
});

module.exports = router;