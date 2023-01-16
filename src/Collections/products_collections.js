const ProductModel = require("../Models/product_model");

//GET ALLS PRODUCT 
exports.GetProduct = async (req, res) => {
  try {
    const response = await ProductModel.find();
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(400).send("hubo un error en la peticion get");
  }
};

//GET SINGLE PRODUCT 
exports.GetOneProduct = async (req, res) => {
  try {
    const { idProduct } = req.params;
    const response = await ProductModel.findById(idProduct.id);
    res.status(200).send(response);

  } catch (error) {
    console.log(error);
    res.status(400).send("hubo un error en la peticion get");
  }
};

exports.PostProduct = async (req, res) => {
  res.send("HOLA POST");
};

exports.PutProduct = async (req, res) => {
  res.send("HOLA PUT");
};
exports.DeleteProduct = async (req, res) => {
  res.send("HOLA DELETE");
};
