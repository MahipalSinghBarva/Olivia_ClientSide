const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")
const errorMiddleWare = require('./middleware/error')
const cookieParser = require("cookie-parser")
// const dotenv = require('dotenv')
const path = require('path')

app.use(express.json({ limit: '1000mb' }))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true, limit:"1000mb"}))
app.use(fileUpload())
app.use(bodyParser.json({ limit: '1000mb' }));

if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({path:'backend/config/config.env'})
}

// route import
const product = require("./route/productRoute")
const user = require("./route/userRouts")
const order = require("./route/orderRoute")
const payment = require("./route/paymentRoute")


app.use("/api/v1", product)
app.use("/api/v1", user)
app.use("/api/v1", order)
app.use("/api/v1", payment)

app.use(express.static(path.join(__dirname, "../frontend/build")))

app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"))
})

// middleware for error
app.use(errorMiddleWare)


module.exports = app