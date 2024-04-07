const express = require('express');
const routes = express.Router();

const User = require("../Controller/userController")    

function Users({getUser,postUser}){
routes.get('/user', getUser);
routes.post('/user/create', postUser);
}
Users(User)
module.exports = routes;