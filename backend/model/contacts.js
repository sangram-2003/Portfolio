const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
  name: { type: String },

  email: { type: String },

  message: { type: String },
  view: { type: Boolean },
});

// Export the task model
exports.contact = mongoose.model("contact", contactSchema);
