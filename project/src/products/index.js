const express = require("express");

const router = express.Router();
const { ProductsController } =require('./controller');
module.exports.Productsapi = (app) => {
    router
        .get("/", ProductsController.getProducts)  //http://localhost:3000/api/products/
        .get("/:id", ProductsController.getProduct)   //http://localhost:3000/api/products/23
        .get("/report", ProductsController.generateReport)
        .post("/", ProductsController.createProducts)
        //update
        //delete
    
    app.use("/api/products", router);
};