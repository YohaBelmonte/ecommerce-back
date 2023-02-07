const mongoose = require("mongoose");

// const reviewSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     rating: {
//       type: Number,
//       required: true,
//     },
//     comment: {
//       type: String,
//       required: true,
//     },
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: "UserModel",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

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
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    size: {
      type: Number,
      required: false,
      default: 0,
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
    // reviews: [reviewSchema],
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
   
    countInStock: {
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
