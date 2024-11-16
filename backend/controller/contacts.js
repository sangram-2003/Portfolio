const model = require("../model/contacts");
const Contact = model.contact;


// Create a new contact
exports.create = async (req, res) => {
    try {
      const contact = new Contact(req.body); // Create a new contact from request body
      await contact.save(); // Save the contact in the database
      res.status(201).json(contact); // Send the created contact back in the response
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Get all contacts
  exports.getAll = async (req, res) => {
    try {
      const contacts = await Contact.find(); // Retrieve all contacts
      res.json(contacts); // Send the list of contacts in the response
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.update = async (req,res)=>{
    try{
         const id  = req.params.id;
        const contact =  await Contact.updateOne({"_id":id},req.body,{new:true});
        res.json(contact)
    }catch(err){
     res.json({message:err.message});
    }
  }

  exports.delete = async (req,res)=>{
    try{
         const id  = req.params.id;
        const contact =  await Contact.deleteOne({"_id":id});
        res.json(contact)
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
  
  
  