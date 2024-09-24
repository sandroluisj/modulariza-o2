const mongoose = require("mongoose");
const timeSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        required: true },
    valor: 
    { type: Number, 
        required: true },
    artilheiros: 
    { type: String, 
        required: true },
   
  });
  const Time = mongoose.model("Time", timeSchema);

  module.exports = Time