require('dotenv').config
const {PASSWORD, MAIL} = process.env
const nodemailer = require('nodemailer')

const postEmail = async (req,res)=>{
    try {
        const {from, subject, text} = req.body

        const config = {
            service: 'gmail',
            port: 456,
            secure: true,
            auth: {
                user: MAIL,
                pass: PASSWORD,
            }
        }
        const message = {
            to: "yuiftw05@gmail.com",
            subject: subject,
            text: `Mail sent by ${from}: ${text}`
        }
        const transport = nodemailer.createTransport(config)

        const info = await transport.sendMail(message)
        res.status(200).send("mail sent succesfully")
        
    } catch (error) {
        res.status(400).json(error)
        console.log(error)
    }
}

module.exports = postEmail