const ProductModel = require("../Models/product_model");
const UserModel = require("../Models/user_model");

// //GET ALLS PRODUCT 
// exports.GetProduct = async (req, res) => {
  
// };

// //GET SINGLE PRODUCT 
// exports.GetOneProduct = async (req, res) => {
  
// };

exports.PostProduct = async (req, res) => {
  res.send("HOLA POST");
};

exports.PutQuantity = async (req, res) => {
  
  const { idProduct } = req.params;
  try {
      const result = await UserModel.findById(req.usuario.id)
      const products = result.arrayProduct.map((item) => {
          return item;
      })
        products.map((item) => {
          if (item == idProduct) {
            products.pop(0, item)
          }
        })
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


exports.DeleteProduct = async (req, res) => {
  res.send("HOLA DELETE");
};
