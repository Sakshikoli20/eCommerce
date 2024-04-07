let express = require("express");

let app = express();
const Port= 8000;

const user = require("./Route/user");
app.use(user)

// app.get("/user/:id", (req, res) => {
//     if{
//         return res.send("get user by id");
//     }
//     return res.send("user doesnt exist");
//     }
// )

const routeProduct = require("./Route/product");
app.use(routeProduct)

const routeOrders = require("./Route/order");
app.use(routeOrders)

app.listen(Port, () => {
    console.log("Server is running on port ") + `${Port}` });