const unsplash = require("unsplash")
const axios = require("axios")
// const { request, response } = require("express")
// const api =unsplash.photos.getPhoto("pFqrYbhIAXs");



const read = (req, res) => res.json("hello from the controller")

const getPhoto = async (req, res) => {
    var data;
    axios.get("https://api.unsplash.com/photos/?client_id=W5uCCNfAJimqyrj3C-lGb0eEIm9r8gRDd5R9gK7fDC0").then(
        (response) => {
            data = response
            res.json(data)
        }
    ).catch(
        (err) => {
            console.log(err);
        })
}

module.exports = { read, getPhoto }