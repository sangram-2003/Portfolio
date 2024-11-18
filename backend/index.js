const express = require("express");
const server = express();
const mongoose = require("mongoose");
const projectRouter = require("./routes/projects");
const reviewRouter = require("./routes/reviews");
const contactRouter = require("./routes/contacts");
const dsaRouter = require("./routes/dsa");
const cors = require("cors");
// Middleware
server.use(cors());
server.use(express.json()); // Parse JSON bodies

// MongoDB connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/MY_WEBSITE");
  console.log("Database connected");
}

// Routes
server.use("/projects", projectRouter);
server.use("/reviews", reviewRouter);
server.use("/contacts", contactRouter);
server.use("/dsa", dsaRouter);

// Start the server
const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log("Server started on port 8080");
});
