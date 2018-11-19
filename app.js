const express = require ("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const port = process.env.PORT || 3001

const cakeRoutes = require("./Routes/cakeRoutes")
const studentRoutes = require("./Routes/studentRoutes")


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


app.get("/", (req, res) => res.json({
    "cakes": "https://ancient-taiga-84596.herokuapp.com/cakes",
    "students": "https://ancient-taiga-84596.herokuapp.com/students"
   }));

app.use("/cakes", cakeRoutes)
app.use("/students", studentRoutes)

app.use(notFound)

app.use(errorHandler)

function notFound(req, res, next) {
    res.status(404).send({ error: 'Not found!', status: 404, url: req.originalUrl })
}

function errorHandler(err, req, res, next) {
    console.error('ERROR', err)
    const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
    res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}



app.listen(port, () => console.log("server is running on 3001"))
