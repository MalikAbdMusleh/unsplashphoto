const express= require("express")
const router = express.Router()
const {read}=require("./controller")
const axios = require("axios")

// test the respons from routes
router.get("/read",(req,res)=>res.json("hallo from routes"))

router.get("/read2",read)

const getPhoto = async (req, res) => {
   await axios.get("https://api.unsplash.com/photos/?client_id=W5uCCNfAJimqyrj3C-lGb0eEIm9r8gRDd5R9gK7fDC0").then(
        (response) => {
            console.log(response.data)
            res.json(response.data[0]) 
        }
    ).catch(
        (err) => {
            console.log(err);
        })
        res.json("search end")
}
router.get("/getPhoto",getPhoto)

module.exports ={router}