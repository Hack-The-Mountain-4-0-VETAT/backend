const express = require('express')
const Order = require('../models/Order')
const router = express.Router()


router.post("/buy", async (req, res) => {
    const data=await Order.find({});
    return res.send({data: data })
  }
)

module.exports = router;