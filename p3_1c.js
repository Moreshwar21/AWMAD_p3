const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'moreshwarsonwale21@gmail.com',
        pass:'Moreshwar@123'
    }
});

var mailOptions = {
    from:'moreshwarsonwale21@gmail.com',
    to:'moreshwarsonwale21@gmail.com',
    subject:'practical',
    text:'AWMAD practical test'
};

transporter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err);
    }
    else{
        console.log('Email send:' + info.response);
    }
});