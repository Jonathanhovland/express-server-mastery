const express = require("express")
const router = express.Router()


const students = require("../students.json")

router.get("/", (req, res) => {
    res.json({ students : students })
})

router.get("/:id", (req, res, next) => {
    
  let chosenStudent = students.filter(student => student.id == req.params.id)

  if(!chosenStudent.length){
    return next()
  }

  res.json({ student : chosenStudent })

})

router.post("/", (req, res) => {
    const newStudent = req.body

    students.push(newStudent)

    res.json({ students: students })
})

router.put("/:id", (req, res) => {
    const body = req.body

    const updatedStudents = students.map(student => {

        if (student.id == req.params.id) {
            return body
        }
        return student
    })

    res.json({ students: updatedStudents })
})


module.exports = router