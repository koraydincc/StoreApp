const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const mainRoute = require("./routes/index");
const port = 5000;

//gizli bilgileri gizlemek için dotenv kullandık
dotenv.config();

//veri tabanı bağlantısı
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Veritabanına bağlanırken hata");
  }
};

//req istek response cevap

app.get("/", (req, res) => {
  res.send("Hello Express.js");
});

app.get("/api", (req, res) => {
  res.send("Bu API Route");
});

app.use("/api", mainRoute);

app.listen(port, () => {
  connect();
  console.log(`Sunucu: ${port} portunda çalışıyor`);
});
