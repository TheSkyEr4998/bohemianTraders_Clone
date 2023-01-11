const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "users", },
    product: {type: mongoose.Schema.Types.ObjectId, ref: "dummies"},
    quantity: {type: Number }
})

const Cart= mongoose.model('Cart' , userModel);

module.exports = Cart;