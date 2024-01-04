const mongoose = require("mongoose");

//Veritabanı ile bağlantık kurduk ve name img adına semalar olusturduk

const CategorySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
