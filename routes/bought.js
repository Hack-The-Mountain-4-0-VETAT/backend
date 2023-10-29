const express = require('express')
const Order = require('../models/Order')
const Balance =require("../models/Balance");
const router = express.Router()


router.post("/bought", async (req, res) => {
    const buyer=req.body.user;
    const order=req.body.order;
    const balance=req.body.balance;
    let data=await Order.find({ _id: order });
    console.log(data[0].Quantity);

    await Balance.findOneAndUpdate({ userId: buyer },{$set: { balance: balance+data[0].Quantity },new: true})
    await Balance.updateOne({ userId: data[0].userId },{$set: { balance: balance-data[0].Quantity }})
    return res.send({"success":"yes"});
  }
)


module.exports = router;