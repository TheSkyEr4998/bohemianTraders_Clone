const { Router } = require("express");
const jwt  = require('jsonwebtoken');
const auth = require('../middleware/auth');
const dummy = require('../models/dummy.models');
const express = require("express");


const route = Router();

route.get('/', async (req, res) => {
  try {

    const search = req.query.search || ""
    const users = await dummy.find({
      $or: [
        {category: {$regex: search, $options: "i"}},
        {name: {$regex: search, $options: "i"}},
        
      ]
    }).lean().exec();
    console.log(users);
    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send(err.message);

  }
})
route.get('/:id',async function (req, res) {
  try {
    const id = req.params.id;
    const data = await dummy.findOne({_id: id})
    return res.status(200).send(data)
  } catch (error) {
    return res.status(500).send({message: error.message})
  }
})

route.post('/post', async (req, res) => {
  try{
    const use =await dummy.create({...req.body});
    return res.status(200).send(use);
  }catch(err){
    return  res.status(200).send("Data Created Successfully");
  }
})






module.exports = route;
