const UserModel = require("../Models/user_model");
const bcrypt = require("bcryptjs") ;

exports.GetUsers = async (req, res) => {
  try {
    const response = await UserModel.find();
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(400).send("hubo un error en la peticion get");
  }
};

exports.PostUsers = async (req, res) => {
  try {
    //Traemos el body de la peticion de postman
    const {email, password } = req.body;

    //Validacion de email
    const validation = await UserModel.findOne({email});
    if (validation) {
        return res.status(400).send("ya existe este email")
    }
    const model = new UserModel({
      ...req.body,
      password: password,
    });
    const response = await model.save();
    res.status(201).send(response);
  } catch (error) {
    console.log(error);
    res.status(400).send("hubo un error en la peticion POST");
  }  
};

exports.PutUsers = async (req, res) => {
  // const { idUser } = req.params;
  // const response = await UserModel.findByIdAndUpdate(
  //   { _id: idUser },
  //   req.body,
  //   { new: true }
  // );
  // res.send(response);
  res.send("Hola mundo");
};
exports.DeleteUsers = async (req, res) => {
  // const { idUser } = req.params;
  // const user = await UserModel.findById(idUser);
  // const response = await user.remove();
  // res.send(response);
  res.send("HOLA DELETE");
};
