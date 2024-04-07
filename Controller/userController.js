getUser = (req, res ) => {
    res.send("User Found");
}

postUser = (req, res) =>{
    // res.send("User Createdhgvygvhgv")
    res.status(201).send("User Created")
}

module.exports = {getUser, postUser};