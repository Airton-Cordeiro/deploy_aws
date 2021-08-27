const express = require("express");
const app = express()

app.get("/", (req,res) => {
    return res.send({message: "servidor online"})
})

app.get("/", (req,res)=>{
    return res.send({message: "Atualizou mesmo"})
})


app.listen(3333, ()=>{
    console.log("Server is running on port 3333")
})