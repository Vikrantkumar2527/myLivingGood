import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "mahurvikky04@gmail.com",
    pass: `${process.env.EMAIL_PASS}`,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(email,code) {
  // send mail with defined transport object
  try {
    const info = await transporter.sendMail({
        from: '"Vikrant" <mahurvikky04@gmail.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "Verfication mail", // Subject line
        text: "Verfiy to your forever", // plain text body
        html: `<b>${code}</b>`, // html body
      });

      console.log("Email send succesfully");
    
  } 
  catch (error) {
    console.log(error);
  }
 

  
}
export default sendEmail;


