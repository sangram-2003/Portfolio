const model = require("../model/dsa");
const Dsa = model.dsa;

// Create a new Dsa
exports.create = async (req, res) => {
  try {
    const dsa = new Dsa(req.body); // Create a new Dsa from request body
    await dsa.save(); // Save the Dsa in the database
    res.status(201).json(dsa); // Send the created Dsa back in the response
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all Dsas
exports.getAll = async (req, res) => {
  try {
    const dsa = await Dsa.find(); // Retrieve all Dsas
    res.json(dsa); // Send the list of Dsas in the response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const dsa = await Dsa.updateOne({ _id: id }, req.body, {
      new: true,
    });
    res.json(dsa);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const dsa = await Dsa.deleteOne({ _id: id });
    res.json(dsa);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// const fs = require("fs");
// const model =require("../model/product");
// const Product = model.product;

// exports.createProduct = async (req,res)=>{

//   //create a constructor

//   const product = new Product(req.body);

//    await product.save(
//    res.status(201).json(req.body)

//    );

//     };

//     exports.getAllProducts = async(req,res)=>{
//       const product = await Product.find();
//       res.json(product);
//     };
//     exports.getProduct = async(req, res) => {
//       const id = req.params.id;
//       const product =  await Product.findById(id)
//       res.json(product);
//     };

//     exports.replaceProduct = async(req, res) => {

//       const id = req.params.id;
//       const product = await Product.replaceOne({"_id":id},req.body,{new:true});
//       res.json(product);

//     };

//     exports.updateProduct = async(req, res) => {
//       const id = req.params.id;
//       const product = await Product.updateOne({"_id":id},req.body,{new:true});

//       res.json(product);
//     };

//     exports.deleteProduct = async (req, res) => {
//       const id = req.params.id;
//       const product = await Product.deleteOne({"_id":id});
//       res.json(product);
//     };
