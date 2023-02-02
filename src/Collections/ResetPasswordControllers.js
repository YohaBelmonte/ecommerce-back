const EmailModel = require('../models/email_model');
const UserModel = require('../Models/user_model');
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken');
require('dotenv').config();

const ForgotPassword = {
    async sendMail(req, res) {
        if(req.body.email == ""){
            res.status(400).send({
                message: 'Email requerido'
            })
        }

        try {
const user = await UserModel.findOne ({
    where: {
        email: req.body.email
    }
})
if(!user) {
    return res.status(403).send({
        message:'no existe el email ingresado'
    })
}

// const token = jwt.sign({id: user.id}, 'esternocleidomastoideo', { expiresIn:"1h"});
// user.update({
// tokenResetPassword: token
// });

const token = jwt.sign(token, process.env.SECRETA, { expiresIn: 90000 },
    (error, token) => {
        if (error) {
            console.log(error)
        }
        res.send(token)
    })

    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "72afad7e3339db",
            pass: "5783f817842b8d"
        }
    });

const emailPort = process.env.EMAIL_PORT || 3000;

const mailOptions = {
    from: 'majorminus4697@gmail.com',
    to: `${user.email}`,
    subject: 'Enlace para recuperar su cuenta',
    text: `${emailPort}/resetpassword/${user.id}/${token}`
};

transporter.sendMail(mailOptions,(err, response) => {
    if(err) {
        console.error('Ha ocurrido un error:', err);
    } else {
        console.log('Respuesta', response);
        res.status(200).json('El email para la recuperación ha sido enviado');

    }
})

 } catch(error) {
res.status(500).send({
    message: 'Ha ocurrido un error',
    error
})
 }
    }
}

module.exports = ForgotPassword;

