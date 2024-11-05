const Product = require("../model/productModel");

const getAllProducts = (req, res) => {
  // res.send("all products");
  Product.find()
    .then((products) => {
      res.status(200);
      res.json({
        message: "product fetched successfully",
        total: products.length,
        data: products,
      });
    })
    .catch((err) => {
      res.status(400);
      res.json({ message: "fetching failed", err: err.message });
    });
};

const createProduct = (req, res) => {
  const productData = req.body;
  // console.log("productData", productData);
  // calling the product model to create data in mongoDB
  Product.create(productData)
    .then((createdProduct) => {
      res.status(201);
      res.json({
        message: "product created successfully",
        data: createdProduct,
      });
    })
    .catch((err) => {
      res.status(400);
      res.json({ message: "failed", err: err.message });
    });
};

const getSingleProduct = (req, res) => {
  const id = req.params.productId;
  console.log("id", id);
    Product.findById(id)
    .then((product) => {
        res.status(200);
        res.json({
          message: "product found successfully",
          data: product,
        });
      })
      .catch((err) => {
        res.status(400);
        res.json({ message: "failed", err: err.message });
      });
};

const updateProduct = (req, res) => {};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  getSingleProduct,
};
