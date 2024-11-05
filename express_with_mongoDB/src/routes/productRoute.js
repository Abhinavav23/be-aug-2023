const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  getSingleProduct,
} = require("../controller/productController");

router.get("/all", getAllProducts);
router.post("/new", createProduct);
router.get("/single/:productId", getSingleProduct);

module.exports = router;
