const mongoose = require("mongoose");
const { Schema } = mongoose;

const dsaSchema = new Schema({
  question: { type: String },
  type: { type: String },
  category: { type: String },
});

// Export the task model
exports.dsa = mongoose.model("dsa", dsaSchema);
