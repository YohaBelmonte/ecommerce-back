//const UserModel = require("../models/user_model")
//const bcrypt = require("bcryptjs")
//const jwt = require("jsonwebtoken")

//exports.AuthGet = async (req, res) => {
  //  try {
        //const response = await UserModel.findById(req.usuario.id);
       // res.status(200).send(response)
    //} catch (error) {
      //  console.log(error)
        //res.status(400).send("error en recuperacion de datos")
    //}
//}

//exports.AuthPost = async (req, res) => {
  //  try {
    //    const { email, password } = req.body;
      //  const usuario = await UserModel.findOne({ email })
        //Email incorrecto
        //if (!usuario) {
          //  res.status(400).send("email incorrecto")
        //}
        //const response = await bcrypt.compare(password, usuario.password)
        //Password incorrecto
        //if (!response) {
          //  return res.status(400).send("password incorrecto")
        //}
        //const userToken = {
          //  usuario: {
            //    id: usuario.id,
            //}
        //}
        //jwt.sign(userToken, process.env.SECRETA, { expiresIn: 10000 },
          //  (error, token) => {
            //    if (error) {
              //      console.log(error)
                //}
                //res.send(token)
            //},
        //)
    //} catch (error) {
      //  console.log(error)
        //res.status(401).send("credenciales incorrectas")
    //}
//}