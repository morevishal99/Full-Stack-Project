const express = require("express")
const cors = require("cors")
const { connection } = require("./connection")
const dotenv = require("dotenv")
const { userModel } = require("./model/user.model")
const { validator } = require("./middleware/validator")
const { isAuth, isAuths } = require("./middleware/isAuth")
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send({ msg: "Welcome to the Project  Made By Vishal More" })
})
// app.use(isAuth)
app.post("/adduser", validator, async (req, res) => {
    const payload = req.body;
    try {
        const userDate = new userModel(payload)
        await userDate.save()
        res.status(200).send("New User Added")

    } catch (error) {
        res.send({ "msg": error.message })
    }

})

app.get("/user", async (req, res) => {
    const query = req.query;

    try {
        const user = await userModel.find(query)
        res.send(user)
    } catch (error) {
        res.send({ "msg": error.message })
    }
})

app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log("Connected to sever")
    } catch (error) {
        console.log(error.message)
    }
    console.log(`Server running on port ${process.env.PORT} `);
})