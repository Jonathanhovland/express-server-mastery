const express = require("express")
const router = express.Router()


let cakes = require("../cakes.json")

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

    res.json({ cakes: newCake })
})

router.put("/:id", (req, res) => {
    let body = req.body

    let updateCakes = cakes.map(cake => {
        if (cake.id == req.params.id) {
            cake = body
            return cake
        }
        return cake
    })

    cakes = updateCakes

    let returnUpdated = cakes.filter(cake => {
        return cake = req.params.id
    })[0]



    res.json({ updatedCake: returnUpdated })

})

router.delete("/:id", (req, res) => {

    let deleteCake = cakes.filter(cake => {
        return cake.id == req.params.id
    })

    cakes = cakes.filter(cake => {
        return cake.id != req.params.id
    })

    res.json({ deletedCake: deleteCake })
})



module.exports = router