const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const userRoutes = require("./src/routes/userRoutes");
const transactionRoutes = require("./src/routes/transactionRoutes");

app.use("/user",userRoutes);
app.use("/api",transactionRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/transactionManagement").then(()=>{
    console.log("Database is Connected");
}).catch((err)=>{
    console.log(err);
})

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`Server is started at port - ${PORT}`);
})