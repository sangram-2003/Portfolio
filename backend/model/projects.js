const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: { type: String},
  category: { type: String},
  description:{ type: String},
  key_features: { type: String},
  github : {type:String},
  privew : {type:String},
  
 
});

// Export the task model
exports.project = mongoose.model('project',projectSchema);
