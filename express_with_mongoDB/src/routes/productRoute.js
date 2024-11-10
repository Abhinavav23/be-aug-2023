const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  getSingleProduct,
  getFilteredProducts
} = require("../controller/productController");

// const controllers = require("../controller/productController");
// router.get("/all", controllers.getAllProducts);

router.get("/all", getAllProducts);
router.post("/new", createProduct);
router.get("/single/:productId", getSingleProduct);
router.get("/filter", getFilteredProducts);

module.exports = router;
