const express = require("express");
const Router = express.Router();
const reviewController = require("../controller/review");

Router
  .post("/", reviewController.create) // Handle POST requests to create a new project
  .get("/", reviewController.getAll)  // Handle GET requests to retrieve all projects
  .patch("/:id", reviewController.update) // Handle PATCH requests to update
  .delete("/:id", reviewController.delete);  // Handle DELETE requests to delete

module.exports = Router;



// Router.get('/' ,productController.getAllProducts )
// .get('/:id',productController.getProduct )
// .post('/',productController.createProduct )
// .put('/:id', productController.replaceProduct)
// .patch('/:id', productController.updateProduct)
// .delete('/:id',productController.deleteProduct )