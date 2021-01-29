const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service:'Gmail',
    
    auth:{
        
        user:'akinloludavid2727@gmail.com',
        pass:'P@$sword2703#'
    },
    tls:{
        rejectUnauthorized: false
    }

})

let mailOptions = {
    from : 'akinloludavid2727@gmail.com',
    to: 'akinloludavid27@yahoo.com',
    subject: 'Sending email with mailer',
    html:'<h1>Mailer</h1> <p>this is my first email with node</p>'
}

transporter.sendMail(mailOptions, (error,info)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(`Email sending ${info.response}`)
    }
})