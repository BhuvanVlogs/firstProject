const express = require("express");
const port = 5000;
const app = express();

const userListRouter = require("./router/usetList.Router")

app.use(express.json());

app.get('/', userListRouter)

app.listen(port, (req, res) => {
    console.log(`Server listen on ${port}`)
})