const Ambulance = require("../models/Ambulance.js")

exports.Register = async(req,res)=>{
    try{
        const { driver, mobileNo, type, available, hospitalName, price, email } = req.body;
      const response = await Ambulance.create({driver,mobileNo,type,available,hospitalName,price,email})
      return res.status(200).json({
        success:true,
        response:response
      })
    }
    catch(err){
        console.log(err)
        return res.status(400).json({
            success:false,
        })
    }
}
exports.getAvailable = async(req,res)=>{
    try{
      const{type} = req.body   
      console.log(type)
      const response = await Ambulance.find({available:1,type:type})
      
        return res.status(200).json({
            success:true,
            response:response
        })
    }
    catch(err){
        console.log(err)
        return res.status(400).json({
            success:false,
        })
    }
}
exports.getNumber = async(req,res)=>{
    try{
        const {type} = req.body   
      console.log(type)   
        const response = await Ambulance.find({hospitalName:type})
        console.log(response)
          return res.status(200).json({
              success:true,
              response:response
          })
      }
      catch(err){
          console.log(err)
          return res.status(400).json({
              success:false,
          })
      }
}
exports.changeAvailable = async(req,res)=>{
    try{
     const{id} = req.body;
     const Find = await Ambulance.findOne({_id:id})
     if(Find.available===true){
        const find = await Ambulance.updateOne({_id:id,available:false})
        return res.json({
            success:true,
            response:find
         })
     }
     else{
        const find = await Ambulance.updateOne({_id:id,available:true})
        return res.json({
            success:true,
            response:find
         })
     }
     
     

    } 
    catch(err){
        console.log(err)
        return res.json({
            success:false,
         })
    }
}