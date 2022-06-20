const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  totalquantity: { type: Number},
});

module.exports = mongoose.model("Product", ProductSchema);
