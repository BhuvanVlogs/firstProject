

const addUser = async (req, res) => {
    try {
        res.status(200).send("Hello World/")
    } catch (error) {
        res.status(400).send("Error World")
    }
}

module.exports = { addUser }