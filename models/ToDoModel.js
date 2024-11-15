const mongoose = require('mongoose');

// Define the schema for the To-Do item
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
  })
  

// Create and export the model
module.exports = mongoose.model('ToDo', todoSchema);

