const express = require("express")
const router = express.Router()


const cakes = require("../cakes.json")

router.get("/", (req, res) => {
    res.json({ cakes: cakes })
})

module.exports = router