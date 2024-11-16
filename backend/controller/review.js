const model = require("../model/reviews");
const Review = model.review;


// Create a new review
exports.create = async (req, res) => {
    try {
      const review = new Review(req.body); // Create a new review from request body
      await review.save(); // Save the review in the database
      res.status(201).json(review); // Send the created review back in the response
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Get all reviews
  exports.getAll = async (req, res) => {
    try {
      const reviews = await Review.find(); // Retrieve all reviews
      res.json(reviews); // Send the list of reviews in the response
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.update = async (req,res)=>{
    try{
         const id  = req.params.id;
        const review =  await Review.updateOne({"_id":id},req.body,{new:true});
        res.json(review)
    }catch(err){
     res.json({message:err.message});
    }
  }

  exports.delete = async (req,res)=>{
    try{
         const id  = req.params.id;
        const review =  await Review.deleteOne({"_id":id});
        res.json(review)
    }catch(err){
     res.json({message:err.message});
    }
  }






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
  
  
  