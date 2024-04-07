const express = require('express');

const getProduct = (req, res ) => {
    res.send("Display Product");
}

module.exports = getProduct;