const ProductModel = require("../Models/product_model");

//GET ALLS PRODUCT 
exports.GetProduct = async (req, res) => {
  try {
    // const response = await ProductModel.find();
    // res.status(200).send(response);
    res.send("ALL PRODUCTS");
  } catch (error) {
    console.log(error);
    res.status(400).send("hubo un error en la peticion get");
  }
};

//GET SINGLE PRODUCT 
exports.GetOneProduct = async (req, res) => {
  try {
    const { idProduct } = req.params;
    const response = await ProductModel.findById(idProduct);
    console.log(idProduct)
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(400).send("hubo un error en la peticion get");
  }
};


exports.PostProduct = async (req, res) => {
  try {
    const {name, image, description, price, countInStock} = req.body;

    const model = new ProductModel({
      name:name,
      image:image,
      description:description,
      price:price,
      countInStock:countInStock,
    });
    const response = await model.save();
    res.status(201).send(response);


  } catch (error) {
    console.log(error);
    res.status(400).send("hubo un error en la peticion get");
  }

  res.send("HOLA POST");
};





exports.PutProduct = async (req, res) => {
  res.send("HOLA PUT");
};
exports.DeleteProduct = async (req, res) => {
  res.send("HOLA DELETE");
};
 