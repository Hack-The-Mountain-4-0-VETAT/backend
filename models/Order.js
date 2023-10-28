const mongoos = require('mongoose')
const OrderSchema = new mongoos.Schema({
        userId: String,
        type: String,
        Quantity: Number,
        Price: Number,
})
const Order = new mongoos.model("Order", OrderSchema)

module.exports = Order;