const model = require("../model/projects");
const Project = model.project;


// Create a new project
exports.create = async (req, res) => {
    try {
      const project = new Project(req.body); // Create a new project from request body
      await project.save(); // Save the project in the database
      res.status(201).json(project); // Send the created project back in the response
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Get all projects
  exports.getAll = async (req, res) => {
    try {
      const projects = await Project.find(); // Retrieve all projects
      res.json(projects); // Send the list of projects in the response
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.update = async (req,res)=>{
    try{
         const id  = req.params.id;
        const project =  await Project.updateOne({"_id":id},req.body,{new:true});
        res.json(project)
    }catch(err){
     res.json({message:err.message});
    }
  }

  exports.delete = async (req,res)=>{
    try{
         const id  = req.params.id;
        const project =  await Project.deleteOne({"_id":id});
        res.json(project)
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
  
  
  