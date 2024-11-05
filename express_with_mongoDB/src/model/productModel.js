const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    price: Number,
    category: String,
    inStock: Boolean,
    quantity: Number
})

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
