const express = require("express")
const cors=require("cors")
require("dotenv").config()

const app=express()
app.use(cors())
app.use(express.json())

const {router}=require("./routes")

app.use(router)
// test api res
app.use((req,res)=>res.json("hallo api"))

app.listen(8000,()=>console.log(`the server is running on 8000`))

