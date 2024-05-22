const nodemailer = require('nodemailer');

function generateRandomNumber() {
    return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'namansharma2408@gmail.com',
        pass: 'kotq udnh jaag lnjh'
    }
});

exports.sendMail = async(req, res) => {
    const {email} = req.body;
    const randomNumber = generateRandomNumber();
    const mailOptions = {
        from: 'ambulancebooker@gmail.com',
        to: email,
        subject: 'OTP',
        text: `Your OTP is : ${randomNumber}`
    };

    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            res.send({
                success:true,
                otp:randomNumber
            });
        }
    });
};

