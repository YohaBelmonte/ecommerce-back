const ProductModel = require("../Models/product_model");
const UserModel = require("../Models/user_model");

exports.PostProduct = async (req, res) => {
  res.send("HOLA POST");
};

exports.PutQuantity = async (req, res) => {
  // qty= "quantity"
  const { idProduct, qty } = req.params;
  try {
    const result = await UserModel.findById(req.usuario.id);
   
    const products = result.arrayProduct.map((item) => {
      return item;
    });
    let newCart = [];
    products.map((item, qty) => {
      if (item.toString() == idProduct) {
        // newCart.push(item);
      }
    });
    // const response = await UserModel.findByIdAndUpdate(
    //   { _id: req.usuario.id },
    //   { arrayProduct: products },
    //   { new: true }
    // );
    // console.log(newCart);
    res.status(201).send(response);
  } catch (error) {
    console.log(error);
    res.status(400).send("error peticion Put Qty");
  }
};


exports.DeleteProduct = async (req, res) => {
  res.send("HOLA DELETE");
};
