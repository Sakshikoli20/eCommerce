let express = require("express");

let app = express();
const Port= 8000;

const routes = require("./Route/user");

app.use(routes)

// app.get("/user/:id", (req, res) => {
//     if{
//         return res.send("get user by id");
//     }
//     return res.send("user doesnt exist");
//     }
// )

app.listen(Port, () => {
    console.log("Server is running on port ") + `${Port}` });