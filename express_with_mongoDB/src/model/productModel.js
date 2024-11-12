const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    // clothing, Vehicle, Appliances, Food
    category: {
        type: String,
        enum: ["clothing", "Vehicle", "Appliances", "Food"]
    },
    inStock: Boolean,
    quantity: Number
})

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
