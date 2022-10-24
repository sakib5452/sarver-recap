const express = require ('express');
const app =express();
const cors = require ('cors');
const Port = process.env.Port || 5000;

const productsCollection = require("./product.json");

app.get("/", (req, res) =>{
    res.send ("Now server is running;")
});

app.get('/allProducts', (req, res) => {
 
    res.send(productsCollection);

});

app.get("/product/:id", (req, res) =>{
    const id  = req.params.id;
    const getSingleItam = productsCollection?.find ((p) => p.id == id);

    if(!getSingleItam){
        res.send ("khuje pai ni")
    }
    res.send (getSingleItam);
});

app.listen(Port, ()=>{
    console.log("server is running", Port);
});

module.exports = app;
