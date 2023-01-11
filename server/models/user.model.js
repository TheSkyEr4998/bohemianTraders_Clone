
const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cart: [{
        product:{ type: mongoose.Schema.Types.ObjectId, ref: "dummies"},
        quantity:{ type: Number,default:1}

    }]
})

const user = mongoose.model('users' , userModel);

module.exports = user;