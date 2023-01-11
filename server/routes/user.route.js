const { Router } = require("express");
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const express = require("express");
const user = require("../models/user.model");
const Cart = require("../models/cart.model");


const route = Router();

route.get('/', async (req, res) => {
  try {
    const users = await user.find().populate('cart').lean().exec();
    console.log(users);
    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send(err.message);

  }
})

route.post('/signup', async (req, res) => {
  try {
    const use = await user.create({ ...req.body });
    return res.status(200).send(use);
  } catch (err) {
    return res.status(200).send({ "message": "SignUp Successfully" });
  }
})


route.get('/user/:id', async (req, res) => {
  let { id } = req.params;
  let temp = await user.find({ _id: { $eq: id } });
  console.log(temp);
  res.send(temp);
})


route.post('/login', async function (req, res) {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const users = await user.findOne({ email: email }).populate('cart.product');
    console.log(users);

    if (!users) {
      return res.status(404).send({ message: 'user not found' });
    }
    console.log(email, password)
    console.log(users);

    if (users.password !== password) {
      return res.status(400).send({ message: "password is incorrect" })
    }
    const token = jwt.sign(users._id.toString(), process.env.JWT_SECRET_KEY)
    return res.status(200).send({ users, token: token.split('.')[2] })
  }
  catch (error) {
    return res.status(500).send({ message: error.message })
  }

})


route.get('/cart', async (req, res) => {

  try {
  const { userId } = req.query;
    const carts = await Cart.find({ userId }).populate('product');
    return res.status(200).send(carts)
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
})

route.post('/cart', async (req, res) => {
  const { userId, productId } = req.body

  try {
    const isExists = await Cart.findOne({ id: userId, product: productId })
    if(isExists) 
    return res.status(400).send({ message: 'already exists', isExists });

    await Cart.create({userId, product: productId, quantity: 1});
    return res.status(200).send({ message: 'added'})
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
})

route.post('/cart/quantity', async (req, res) => {
  const { id, quantity } = req.body

  try {
    console.log(id)
    const cart = await Cart.findByIdAndUpdate(id, { quantity }, { new: true });
    console.log(cart);
    return res.status(200).send(cart);
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
})

route.delete('/cart/:id', async (req, res) => {
  const id = req.params.id

  try {
    await Cart.findByIdAndRemove(id)
    return res.status(200).send(user)
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
})






module.exports = route;
