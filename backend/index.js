require('dotenv').config()
const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors())
const port = process.env.PORT || 3000;

app.get("/api/data",(req,res)=>{
    const data = [
        {
            "id":1,
            "name":"John",
            "age":30,
            "cars":["Ford", "BMW", "Fiat"]
        },
        {
            "id":2,
            "name":"Omkar",
            "age":30,
            "cars":["Ford", "BMW", "Fiat"]
        },
        {
            "id":3,
            "name":"Raj",
            "age":29,
            "cars":["Ford", "BMW", "Fiat"]
        },
        {
            "id":4,
            "name":"Ram",
            "age":32,
            "cars":["Ford", "BMW", "Fiat"]
        },
        {
            "id":5,
            "name":"Ganesh",
            "age":27,
            "cars":["Ford", "BMW", "Fiat"]
        }
    ]
    res.send(data);
})

app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})