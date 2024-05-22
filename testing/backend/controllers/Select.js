const Select = require("../models/Requested")
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'namansharma2408@gmail.com',
        pass: 'kotq udnh jaag lnjh'
    }
});
exports.Request = async(req,res)=>{
  try{
    const{name,address,email,driverEmail,mobileNo} = req.body;
    // console.log(name,address,email,driverEmail,mobileNo)
    const response = await Select.create({name,address,email,driverEmail,mobileNo})
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

exports.getDriver = async(req,res)=>{
  try{
   const{email} = req.body;
   const response = await Select.find({driverEmail:email})
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
exports.Accept = async(req,res)=>{
  try{
    const {email} = req.body;

    const response = await Select.deleteOne({email:email})
    const mailOptions = {
        from: 'ambulancebooker@gmail.com',
        to: email,
        subject: 'Accepted',
        text: `Your Ride has been Accepted`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            res.send({
                success:true,
                
            });
        }
    });
  }
  catch(err){

  }
}