const express = require("express");
const z = require("zod");

const router = express.Router();

router.get("/", async (req, res) => {
  return res.json({ message: "Healthy user router" });
})

module.exports = router;
