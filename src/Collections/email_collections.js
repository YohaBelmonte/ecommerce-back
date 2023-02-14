const EmailModel = require('../models/email_model');
const UserModel = require('../Models/user_model');
const nodemailer = require('nodemailer')

exports.EmailGet = async (req, res) => {
    try {
        const emailEncontrado = await EmailModel.find();
        res.status(200).send(emailEncontrado);
    } catch (error) {
        console.log(error);
        res.status(400).send("email no encontrado");
    }
}
exports.EmailPost = async (req, res) => {

    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "041cd95cb5231f",
          pass: "a815eb368b16e0"
        }
      });

    const { title, description } = req.body;

    try {

     const emailUser = await UserModel.findById(req.usuario.id)


        const emailModel = new EmailModel({
            title: title,
            description: description,
            author: req.usuario.id,
        })

        await emailModel.save()

        //peticion a nodemailer
        //envio su email
        const response = await transport.sendMail({
            //email del que envio el mensaje
            from: emailUser.email,
            to: ['admin.admin@gmail.com'],
            subject: title,
            text: description,
        })
        res.status(200).send(response);

    } catch (error) {
        console.log(error);
        res.status(400).send("email no encontrado");
    }
}