const express = require("express")
const router = express.Router()


let students = require("../students.json")

router.get("/", (req, res) => {
    res.json({ students : students })
})

router.get("/:id", (req, res, next) => {
    
  let chosenStudent = students.filter(student => student.id == req.params.id)

  if(!chosenStudent.length){
    return next()
  }

  res.json({ student : chosenStudent[0] })

})

router.post("/", (req, res) => {
    const newStudent = req.body

    students.push(newStudent)

    res.json({ students: newStudent })
})

router.put("/:id", (req, res) => {
    let body = req.body

    let updateStudents = students.map(student => {
        if (student.id == req.params.id) {
            student = body
            return student
        }
        return student
    })

    students = updateStudents

    let returnUpdated = students.filter(student => {
        return student == req.params.id
    })[0]



    res.json({ updatedStudent: returnUpdated })

})

router.delete("/:id", (req, res) => {

    let deleteStudent = students.filter(student => {
        return student.id == req.params.id
    })

    students = students.filter(student => {
        return student.id != req.params.id
    })

    res.json({ deletedStudent: deleteStudent })
})


module.exports = router