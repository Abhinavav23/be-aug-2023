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

const getFilteredProducts = async (req, res) => {
    const recievedQuery = req.query;
    console.log("recievedQuery", recievedQuery);
    // if(req.query.category){
    //     try{
    //        const filteredProduct =  await Product.find(req.query);
    //        if(filteredProduct.length> 0){
    //         res.send({message: "success", data: filteredProduct})
    //        }else{
    //         res.send({message: "success", data: "no data found"})
    //        }
           
    //     }catch(err){
    //         res.send({message: "failed", error: err})
    //     }  
    // }

    // selecting specific information from documents
    // const products =  await Product.find(req.query).select({quantity: 0, price: 0})
    // const products =  await Product.find(req.query).select({name: 1, category: 1, inStock:1})


    // select limited number of documents
    // const products = await Product.find().limit(20);

    // arithmatic operations
    // greater than(>), less than(<), greater than equal to(>=), less than equal to(<=)

    // const products = await Product.find({category: {$in: ["clothing", "Appliances"]}})
    // const products = await Product.find({category: {$nin: ["clothing", "Appliances"]}})
    const products = await Product.find({category: {$ne: "clothing"}})

    res.json({total:products.length, data: products})

}

const updateProduct = (req, res) => {};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  getSingleProduct,
  getFilteredProducts
};
