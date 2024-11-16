const express = require("express");
const Router = express.Router();
const dsaController = require("../controller/dsa");

Router.post("/", dsaController.create) // Handle POST requests to create a new project
  .get("/", dsaController.getAll) // Handle GET requests to retrieve all projects
  .patch("/:id", dsaController.update) // Handle PATCH requests to update
  .delete("/:id", dsaController.delete); // Handle DELETE requests to delete

module.exports = Router;

// Router.get('/' ,productController.getAllProducts )
// .get('/:id',productController.getProduct )
// .post('/',productController.createProduct )
// .put('/:id', productController.replaceProduct)
// .patch('/:id', productController.updateProduct)
// .delete('/:id',productController.deleteProduct )
