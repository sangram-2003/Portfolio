const express = require("express");
const Router = express.Router();
const projectController = require("../controller/projects");

Router
  .post("/", projectController.create) // Handle POST requests to create a new project
  .get("/", projectController.getAll)  // Handle GET requests to retrieve all projects
  .patch("/:id", projectController.update) // Handle PATCH requests to update
  .delete("/:id", projectController.delete);  // Handle DELETE requests to delete

module.exports = Router;



// Router.get('/' ,productController.getAllProducts )
// .get('/:id',productController.getProduct )
// .post('/',productController.createProduct )
// .put('/:id', productController.replaceProduct)
// .patch('/:id', productController.updateProduct)
// .delete('/:id',productController.deleteProduct )