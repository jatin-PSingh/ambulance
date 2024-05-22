const Hospital = require("../models/Hospital")

exports.create= async(req,res)=>{
    try{
    const{name,position} = req.body;
    const response = await Hospital.create({
        name,position
    })
    return res.status(200).json({
        success:true,
        response:response
    })

    }
    catch(err){
    console.log(err)
    return res.status(200).json({
        success:false,
        response:response
    })
    }

}
exports.getAll = async(req,res)=>{
 try{
   const response = await Hospital.find({})
   console.log(response)
   return res.status(200).json({
    success:true,
    response:response
   })
 }  
 catch(err){
    console.log(err)
    return res.status(200).json({
        success:false,
        
    })
    }

 
}