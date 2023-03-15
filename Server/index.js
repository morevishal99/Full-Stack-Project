const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/data", (req, res) => {
    res.send([{
        name: "vishal",
        city: "pune"
    },{
        name: "vishal",
        city: "pune"
    }])
})

app.listen(4000, () => {
    console.log("Server running on port 4000");
})