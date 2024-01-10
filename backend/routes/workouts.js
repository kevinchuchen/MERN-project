const express = require('express')
const {} =

const router = express.Router()


//get all workouts
router.get('/',(req,resp)=>{
    resp.json({msg:"Get all workouts"})
})


//get single workout
router.get('/:id',(req,resp)=>{
    resp.json({msg:"Get single workout"})
})

//post new workout
router.post('/', createWorkout)

//delete a workout
router.delete('/:id',(req,resp)=>{
    resp.json({msg:"delete a workout"})
})

//update a workout
router.patch('/:id',(req,resp)=>{
    resp.json({msg:"update a workout"})
})

module.exports = router