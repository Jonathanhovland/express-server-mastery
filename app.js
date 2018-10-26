const express = require ("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const port = process.env.PORT || 3001

const cakeRoutes = require("./Routes/cakeRoutes")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get("/", (req, res) => {
    res.json("🥨")
})

app.use("/cakes", cakeRoutes)











app.listen(port, () => console.log("server is running on 3001"))

