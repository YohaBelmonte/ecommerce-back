const UserModel = require("../Models/user_model");
const bcrypt = require("bcryptjs");

exports.GetUsers = async (req, res) => {
  try {
    //Para el get se usa de referecia el nombre del atributo del schema en este caso "arrayProduct"
    const response = await UserModel.find().populate("arrayProduct").exec();
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(400).send("hubo un error en la peticion get");
  }
};

// get ONE USER to admin filter
exports.GetUser = async (req, res) => {
  try {
    //Para el get se usa de referecia el nombre del atributo del schema en este caso "arrayProduct"
    const response = await UserModel.findById(req.usuario.id);
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(400).send("hubo un error en la peticion get");
  }
};

exports.PostUsers = async (req, res) => {
  try {
    //Traemos el body de la peticion de postman
    const { email, password } = req.body;

    //Validacion de email
    const validation = await UserModel.findOne({ email })
    if (validation) {
      return res.status(400).send("ya existe este usuario")
    }

    //Encryptar password
    const encrypt = await bcrypt.genSalt(10)
    const passEncrypt = await bcrypt.hash(password, encrypt)

    //Crear un Modelo nuevo con los datos indicados
    const model = new UserModel({
      ...req.body,
      password: passEncrypt,
    })

    //Guardar en la base de datos el nuevo modelo
    const response = await model.save()
    res.status(201).send(response);
  } catch (error) {
    console.log(error)
    res.status(400).send("hubo un error en la peticion post")
  }
}

exports.PutUsers = async (req, res) => {
  try {
    //Buscamos su ID por parametros
    const { idUser } = req.params;
    const { password } = req.body;
    //Encryptar password
    const encrypt = await bcrypt.genSalt(10)
    const passEncrypt = await bcrypt.hash(password, encrypt)

    //Busca el usuario por ID (idUser) => tomar el req.body y cambia el usuario encontrado
    const response = await UserModel.findByIdAndUpdate({
      _id: idUser
    }, {
      ...req.body,
      password: passEncrypt,
    }, { new: true })
    res.status(201).send(response);
  } catch (error) {
    console.log(error)
    res.status(400).send("hubo un error en la peticion put")
  }
}

// change ADMIN atribute "isAdmin"
exports.PutAdmin = async (req, res) => {
  const { idUser } = req.params;
  try {
    const user = await UserModel.findById(idUser);
    const isAdmin = user.isAdmin;
    console.log(user);
    if (!isAdmin) {
      isAdminState = true;
    }else{
      isAdminState = false;
    }
    const response = await UserModel.findByIdAndUpdate(
      { _id: idUser },
      { isAdmin: isAdminState },
      { new: true }
    );
    res.status(201).send(response);  
    
  } catch (error) {
    console.log(error);
    res.status(400).send("hubo un error en la peticion post");
  }
};

exports.DeleteUsers = async (req, res) => {
  try {
    //Buscamos su ID por parametros
    const { idUser } = req.params;
    //Buscamos en la base de datos al usuario que tiene el id del parametro (idUser)
    const user = await UserModel.findById(idUser)
    //Elimino el usuario que busque por ID (idUser)
    const response = await user.remove();
    res.status(200).send(response)
  } catch (error) {
    console.log(error)
    res.status(400).send("hubo un error en la peticion delete")
  }
}
