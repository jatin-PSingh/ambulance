const mongoose = require("mongoose")

const Hospitals = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  position: {
    type: [Number],
    required: true
  },
  
})
module.exports = mongoose.model("hospitals",Hospitals)