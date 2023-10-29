const express = require('express')
const Order = require('../models/Order')
const router = express.Router()


router.post("/order", async (req, res) => {
  let newOrder = new Order({
    userId: req.body.user,
    type: req.body.type,
    Quantity: req.body.quantity,
    Price: req.body.price,
  })
  console.log(newOrder);
    await newOrder.save();
    return res.send({success: "success" })
  }
)

module.exports = router;