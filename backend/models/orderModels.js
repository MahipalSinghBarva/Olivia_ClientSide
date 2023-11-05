const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  shippingInfo: {
    address: { type: String, requried: true },
    city: { type: String, requried: true },
    state: { type: String, requried: true },
    country: { type: String, requried: true },
    pincode: { type: Number, requried: true },
    PhoneNo: { type: Number, requried: true },
  },
  orderItems: [
    {
      name: {
        type: String,
        requried: true,
      },
      price: {
        type: Number,
        requried: true,
      },
      quantity: {
        type: Number,
        requried: true,
      },
      image: {
        type: String,
        requried: true,
      },
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        requried: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    requried: true,
  },
  paymentInfo: {
    id: {
      type: String,
      requried: true,
    },
    status: {
      type: String,
      requried: true,
    },
  },
  paidAt: {
    type: Date,
    requried: true,
  },
  itemsPrice: {
    type: Number,
    default: 0,
    requried: true,
  },
  taxPrice: {
    type: Number,
    default: 0,
    requried: true,
  },
  ShippingPrice: {
    type: Number,
    default: 0,
    requried: true,
  },
  totalPrice: {
    type: Number,
    default: 0,
    requried: true,
  },
  orderStatus: {
    type: String,
    default: "Processing",
    requried: true,
  },
  diliveredAt: Date,
  createAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Order", orderSchema)