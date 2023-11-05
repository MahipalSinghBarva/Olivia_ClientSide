const app = require('./app')
// const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cloudinary = require("cloudinary")

// handling uncaught execption
process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down server due to uncaught Exception`)
    process.exit(1)
})

if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({path:'backend/config/config.env'})
}


connectDB()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})



// unhandle promise rejection
process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`)
    console.log('Shutting down server due to Unhandled prom rej')

    server.close(()=>{
        process.exit(1)
    })
})