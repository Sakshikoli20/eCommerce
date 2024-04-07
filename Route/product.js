const express = require('express');

const getProduct = require("../Controller/productController")    

const routeProduct = express.Router();

routeProduct.get('/product', getProduct);

module.exports = routeProduct;