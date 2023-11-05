const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    requried: [true, "Please enter product name"],
  },
  description: {
    type: String,
    requried: [true, "Please enter product description"],
  },
  price: {
    type: Number,
    requried: [true, "Please enter product price"],
    maxLength: [8, "Price can not exced 8 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        requried: true,
      },
      url: {
        type: String,
        requried: true,
      },
    },
  ],
  category: {
    type: String,
    requried: [true, "Please enter product category"],
  },
  stock: {
    type: Number,
    requried: [true, "Please enter product stock"],
    maxLength: [4, "Stock cannot be exced 4 characters"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        requried: true,
      },
      rating: {
        type: Number,
        requried: true,
      },
      comment: {
        type: String,
        requried: true,
      }
    }
  ],

  user:{
    type:mongoose.Schema.ObjectId,
    ref:"User",
    requried:true
  },

  createdAt: {
    type:Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Product", productSchema);
