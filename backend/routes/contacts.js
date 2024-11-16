const express = require("express");
const Router = express.Router();
const contactController = require("../controller/contacts");

Router
  .post("/", contactController.create) // Handle POST requests to create a new project
  .get("/", contactController.getAll)  // Handle GET requests to retrieve all projects
  .patch("/:id", contactController.update) // Handle PATCH requests to update
  .delete("/:id", contactController.delete);  // Handle DELETE requests to delete

module.exports = Router;



// Router.get('/' ,productController.getAllProducts )
// .get('/:id',productController.getProduct )
// .post('/',productController.createProduct )
// .put('/:id', productController.replaceProduct)
// .patch('/:id', productController.updateProduct)
// .delete('/:id',productController.deleteProduct )