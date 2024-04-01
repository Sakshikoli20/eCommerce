const express = require('express');

const getUser = (req, res ) => {
    res.send("User Found");
}

module.exports = getUser;