const express = require("express");
const router = express.Router();

// Tüm kategorileri getirme (Read- All)

router.get("/categories", async (req, res) => {
  res.send("Kategoriler getirildi");
});

module.exports = router;
