const mongoose = require("mongoose")


const Select = new mongoose.Schema({
    name:{
     type:String,
     required:true,
    },
    address:{
        type:String,
        required:true
    },
    email:{
     type:String,
     required:true,
    },
    driverEmail:{
     type:String,
     required:true,
    },
    mobileNo:{
        type:String,
        required:true
    }

})
module.exports = mongoose.model("requested",Select)