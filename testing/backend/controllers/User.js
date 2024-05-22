const User = require("../models/User")

exports.Signup = async(req,res)=>{
    try{
     const{name,email,password} = req.body;
     const find = await User.findOne({email:email})
     if(find){
        return res.status(200).json({
            success:false,
            message:"User already exist"
        })
     }
     else{
        const response = await User.create({name,email,password})
        return res.status(200).json({
            success:true,
            message:"entry created successfully",
            response:response
        })
     }
    }
    catch(err){
        return res.status(200).json({
            success:false,
            message:"error"
        })
    }
}

exports.Login = async(req,res)=>{
    try{
     const{email,password} = req.body;
     const find = await User.findOne({email})
     if(find){
        if(find.password===password){
            return res.status(200).json({
                success:true,
                message:"login successfully"
            })
        }
        else{
            return res.status(200).json({
                success:false,
                message:"wrong passoword"
            })
        }
     }
     else{
        return res.status(200).json({
            success:false,
            message:"User does not exist"
        })
     }
    }
    catch(err){
        console.log(err);
        return res.status(200).json({
            success:false,
            message:"error"
        })
    }
}