const mongoose = require("mongoose")

const Ambulance = new mongoose.Schema({
    driver:{
        type:String,
        required:true,
    },
    mobileNo:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    available:{
    type: Boolean,
    default: false
    },
    hospitalName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
})
module.exports = mongoose.model("Ambulance",Ambulance)