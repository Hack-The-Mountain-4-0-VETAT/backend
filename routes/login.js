const express = require('express')
const Balance = require('../models/Balance')
const Order=require("../models/Order")
const router = express.Router()


router.post("/login", async (req, res) => {
    let bal = new Balance({
        userId: req.body.user,
        balance: 0,
        transaction:[],
    })
    await bal.save()
    return res.send({"success":"yes"});

  }
)

module.exports = router;