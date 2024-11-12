const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  getSingleProduct,
  getFilteredProducts,
  updateProduct,
  deleteProduct,
  updateOrCreateProduct,
  getPaginatedProduct
} = require("../controller/productController");

// const controllers = require("../controller/productController");
// router.get("/all", controllers.getAllProducts);

router.get("/all", getAllProducts);
router.post("/new", createProduct);
router.get("/single/:productId", getSingleProduct);
router.get("/filter", getFilteredProducts);
router.patch("/updateOnly/:productId", updateProduct);
router.put("/update/:productId", updateOrCreateProduct)
router.delete("/remove/:productId", deleteProduct);
router.get("/all/paginated", getPaginatedProduct)

module.exports = router;
