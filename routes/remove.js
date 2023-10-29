const express = require('express')
const Order=require("../models/Order")
const router = express.Router()


router.post("/remove", async (req, res) => {
    const user=req.body.user;
    const data=await Order.deleteOne({_id:user});
    return res.send({data:data});

  }
)

module.exports = router;