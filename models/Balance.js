const mongoos = require('mongoose')
const BalanceSchema = new mongoos.Schema({
        balance:Number,
        userId:String,
        transaction:[{
                price:Number,
                Quanity:Number,
                type:String,
        }]
})
const Balance = new mongoos.model("Balance", BalanceSchema)

module.exports = Balance;