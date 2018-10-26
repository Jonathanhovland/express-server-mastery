const express = require("express")
const router = express.Router()


const students = require("../students.json")

router.get("/", (req, res) => {
    res.json({ students : students })
})

router.get("/:id", (req, res) => {
    
  let chosenStudent = students.filter(student => student.id == req.params.id)
  res.json({ student : chosenStudent })

})

module.exports = router