const express = require('express');

const getOrders = require("../Controller/productController")

const routeOrders = express.Router();

routeOrders.get('/orders', getOrders);

module.exports = routeOrders;
