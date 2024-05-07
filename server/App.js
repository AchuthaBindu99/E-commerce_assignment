const express = require("express")
const app = express()
const items = require("./routes/items")
const cors = require ("cors")


app.use(express.json())
app.use(cors())

app.use("/items", items)

module.exports = app;