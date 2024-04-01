const express = require('express');

const getUser = require("../Controller/userController")    

const routes = express.Router();

routes.get('/user', getUser);

module.exports = routes;