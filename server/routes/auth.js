const router = require("express").Router();

router.post("/", (req, res) => {
  res.send(true);
});

module.exports = router;
