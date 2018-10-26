const express = require("express")
const router = express.Router()


const cakes = require("../cakes.json")

router.get("/", (req, res) => {
    res.json({ cakes: cakes })
})

router.get("/:id" , (req, res, next) => {
    
    let chosenCake = cakes.filter(cake => cake.id == req.params.id)
    
    if (!chosenCake.length) {
        return next()
    }

    res.json({ cake: chosenCake[0] })
})

router.post("/", (req, res) => {
    const newCake = req.body

    cakes.push(newCake)

    res.json({ cakes: cakes })
})

router.put("/:id", (req, res) => {
    const body = req.body

    const updatedCakes = cakes.filter(cake => {

        if (cake.id == req.params.id) {
            return body
        }
        return cake
    })

    res.json({ cakes: updatedCakes })
})

router.delete



module.exports = router