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

    // Logical operators, AND, OR, NOR, NOT

    // Regex

    res.json({total:products.length, data: products})

}

const updateProduct = async(req, res) => {
    console.log("productId", req.params.productId);

    try{
        // find the document with given id
        // update the document with given data
        // by default this method returns the old data
        // const resData = await Product.findByIdAndUpdate(req.params.productId, {$set: req.body});

        // if you want the updated data then you have to use a key called new: true
        const updatedData = await Product.findByIdAndUpdate(req.params.productId, {$set: req.body}, {new: true});
        if(updatedData){
            res.json({message: "data updated successfully", data: updatedData})
        }else{
            res.json({message: "something went wrong!!"})
        }
        
    }catch(err){
        res.json({message: "failed", err: err.message})
    }
};

const updateOrCreateProduct = async(req, res) => {
    try{
        // find the document with given id
        // update the document with given data
        // by default this method returns the old data
        // const resData = await Product.findByIdAndUpdate(req.params.productId, {$set: req.body});
        // if you want the updated data then you have to use a key called new: true
        const info = await Product.findByIdAndUpdate(req.params.productId, {$set: req.body}, {new: true, upsert: true});
        console.log("info", info);
        res.send({message: "updated"})
        
    }catch(err){
        res.json({message: "failed", err: err.message})
    }
}

const deleteProduct = async(req, res) => {
    try{
        const removed = await Product.findByIdAndDelete(req.params.productId);
        res.json({message: "data deleted successfully", removedItem: removed})
    }catch(err){
        res.json({message: "failed", err: err.message});
    }
}

const getPaginatedProduct = async(req, res) => {
    const {page, total} = req.query;
    console.log("page", page);
    console.log("total", total);
    try{
        const products = await Product.find().skip((page-1)*total).limit(total);
        res.json({total: products.length, data: products})
    }catch(err){
        res.json({message: "failed", err: err.message});
    }
}

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  getSingleProduct,
  getFilteredProducts,
  updateOrCreateProduct,
  deleteProduct,
  getPaginatedProduct
};
