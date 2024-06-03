const express = require("express");
const port = 5000;
const app = express();

const userListRouter = require("./router/usetList.Router")
const addUserList = require("./router/addUserList")

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/list", userListRouter)
app.use("/add", addUserList)

app.listen(port, (req, res) => {
    console.log(`Server listen on ${port}`)
})