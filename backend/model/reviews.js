const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  email: { type: String },
  phone: { type: Number },
  comment: { type: String },
  img: { type: String },
});

exports.review = mongoose.model("review", reviewSchema);
