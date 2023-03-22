const {UserModel} = require('../Models/user_model');
const bcrypt = require('bcrypt');

let regExPassword = /^(?=, *[a-z])(?=,*\d)(?=,*[@$!%*?&+])[A-Za-z\d@$!%*?&+]{8,16}$/;

const ResetPassword = {
async reset(req, res) {
    if (!regExPassword.test(req.body.password)) {
        res.send ({
            message: 'La contraseña debe contener al menos 8 caracteres, 1 número, 1 letra mayúscula y un caracter especial.'
        });
        return;
    }
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const resetPassword = await UserModel.update(req. body, {
            where: {
                id: req.params.id,
                tokenresetpassword: req.params.tokenresetpassword

            }
        });
        res.status(201).send({
            message:'Contraseña actualizada con éxito'
        })
    } catch(error) {
        res.status(500).send({
            message: 'error',
            error
        })
    }
}
}

module.exports = ResetPassword;