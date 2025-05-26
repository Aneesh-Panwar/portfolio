require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const connectDB = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is live!");
});



connectDB().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`SERVER is running at PORT  : ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("error to connect",err);
})
