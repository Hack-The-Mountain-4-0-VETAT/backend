const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 4000
require("./connect_mongo")

app.use(cors())
app.use(express.json())
app.use('/api', require('./routes/order'))
app.get("/", (req, res) => {
    res.send("hack the mountain VETAT")
})


app.listen(port, () => {
    console.log(`successfully loaded at ${port}`)
})

module.exports = app;
