const express = require("express")
const router = express.Router()


const cakes = require("../cakes.json")

router.get("/", (req, res) => {
    res.json({ cakes: cakes })
})

router.get("/:id" , (req, res, next) => {

    let chosenCake = cakes.filter(cake => cake.id == req.params.id)
    
    if (!chosenCake.length) {
        console.log("🥨")
        next()
    }

    res.json({ cake: chosenCake[0] })
})

module.exports = router