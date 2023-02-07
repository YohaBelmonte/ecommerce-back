const ProductModel = require("../Models/product_model");
const UserModel = require("../Models/user_model");

//GET ALLS PRODUCT
exports.GetProduct = async (req, res) => {
  try {
    const response = await ProductModel.find();
    res.status(200).send(response);
    // res.send("ALL PRODUCTS");
  } catch (error) {
    console.log(error);
    res.status(400).send("hubo un error en la peticion get");
  }
};

//GET SINGLE PRODUCT
// exports.GetOneProduct = async (req, res) => {
//   try {
//     const { idProduct } = req.params;
//     const response = await ProductModel.findById(idProduct);
//     console.log(idProduct)
//     res.status(200).send(response);
//   } catch (error) {
//     console.log(error);
//     res.status(400).send("hubo un error en la peticion get");
//   }
// };

  //GET CART PRODUCT
  exports.GetCartProduct = async (req, res) => {
    try {
      const result = await UserModel.findById(req.usuario.id)
      const cartProducts = result.arrayProduct.map((item) => {
          return item;
      })
      console.log(cartProducts)
      res.status(200).send(response);
    } catch (error) {
      console.log(error);
      res.status(400).send("hubo un error en la peticion get");
    }
  };

//POST PRODUCT BY ADMIN
exports.PostProduct = async (req, res) => {
  const { name, image, description, price, countInStock } = req.body;
  try {
    //A traves del Middleware obtenemos el idUser para encontrar y poder ponerlo como author del producto POSTEADO 
    const userModel = await UserModel.findById(req.usuario.id);
    const model = new ProductModel({
      // Aqui ↓↓ se lo define como author del producto posteado
      author: userModel,
      ...req.body,
    });
    // const model = new ProductModel({
    //   author: req.usuario.id,
    //   name: name,
    //   image: image,
    //   description: description,
    //   price: price,
    //   countInStock: countInStock,
    // });
    const response = await model.save();
    res.status(201).send(response);
  } catch (error) {
    console.log(error);
    res.status(400).send("hubo un error en la peticion post");
  }
};

//PUT ADD PRODUCT para cada arrayProduct de cada User
exports.PutAddProduct = async (req, res) => {
  const { idProduct } = req.params;
  try {
      //↓↓ A traves del middleware uso el token que esta guardado en el req.usuario...
      //↓↓... y busco el objeto usuario a traves de el "req.usuario.id"
      const result = await UserModel.findById(req.usuario.id)

      //↓↓ Buscamos el atributo arrayProduct del usuario y luego ...
      //↓↓ ...hacemos un map donde se va a mostrar el arrayProduct, es decir ...
      //↓↓ ...se verán todos los productos actuales guardados del usuario
      const products = result.arrayProduct.map((item) => {
          return item;
      })
      //↓Luego agregamos al arrayProduct el nuevo idProduct (accion de ADD TO CART)
      products.push(idProduct);
      //↓ Actualizamos el usuario con el arrayProduct completo (los productos antiguos mas el nuevo)
      const response = await UserModel.findByIdAndUpdate(
          { _id: req.usuario.id },
          { arrayProduct: products },
          { new: true }
      )
      res.status(201).send(response);
  } catch (error) {
      console.log(error)
      res.status(400).send("hubo un error en la peticion post")
  }
}

//PUT REMOVE PRODUCT para cada arrayProduct de cada User
exports.PutRemoveProduct = async (req, res) => {
  
  const { idProduct } = req.params;
  try {
      const result = await UserModel.findById(req.usuario.id)
      const products = result.arrayProduct.map((item) => {
          return item;
      })
      console.log(products)
      products.map((item) => {
          if (item == idProduct) {
            // Paso en el que se elimina el product si es que ecuentra una coincidencia
              products.pop(0, item)
          }
      })

      //4) Actualizamos el usuario con la lista completa (los productos antiguos mas el nuevo)
      const response = await UserModel.findByIdAndUpdate(
          { _id: req.usuario.id },
          { product: products },
          { new: true }
      )
      res.status(201).send(response);
  } catch (error) {
      console.log(error)
      res.status(400).send("hubo un error en la peticion post")
  }
}


exports.PutProduct = async (req, res) => {
  try {
    // estoy solicitando por paramentro el id ↓
    const { idProduct } = req.params;
    const response = await ProductModel.findByIdAndUpdate(
      { _id: idProduct },
      req.body,
      { new: true }
    );
    res.status(201).send(response);
  } catch (error) {
    console.log(error);
    res.status(400).send("hubo un error en la peticion put");
  }
};
exports.DeleteProduct = async (req, res) => {
  res.send("HOLA DELETE");
};
