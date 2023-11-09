const app = require("./app");
// const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cloudinary = require("cloudinary");
const path = require("path");
// const http = require('http');
// handling uncaught execption
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server due to uncaught Exception`);
  process.exit(1);
});


if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({path:'.env'})
}

// dotenv.config({ path: ".env" });
// if (result.error) {
//     console.error('Error loading config.env:', result.error);
//   } else {
//     console.log('Environment variables loaded successfully:', process.env);
//   }

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     // res.end('Hello world')
// });

app.listen(process.env.PORT, () => {
  console.log(`Server is working on PORT:${process.env.PORT}`);
});

// app.listen(8080,()=>{
//     console.log(`Server is working on http://localhost:8080`);
// })

// unhandle promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down server due to Unhandled prom rej");

  server.close(() => {
    process.exit(1);
  });
});
