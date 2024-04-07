const express = require('express');

const getOrders = (req,res) => {
    res.send("Orders Found");
}

module.exports = getOrders;