const mongoose = require("mongoose");

const ProductModel = mongoose.Schema(
  {
    author:{
      type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
    image3: {
      type: String,
      required: true,
    },
    image4: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: false,
      default: 9,
    },
    color: {
      type: String,
      required: true,
    },
    fav: {
      type: Boolean,
      required: false,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
   
   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ProductModel", ProductModel);
