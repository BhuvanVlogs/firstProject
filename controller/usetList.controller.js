const userList = (req, res) => {
    try {
        res.status(200).send("USER LIST");
    } catch (error) {
        res.status(404).send("User Not Found!");
    }
}

const addUser = (req, res) => {
    try {
        res.status(200).send("After CI/Cd ADD USER");
    } catch (error) {
        res.status(404).send("User Not Found!");
    }
}

module.exports = { userList, addUser }