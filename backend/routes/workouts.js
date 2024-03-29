const express = require('express')

const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//fire middleware function before running the controller functions (require auth for all workout routes)
router.use(requireAuth) 

//get all workouts
router.get('/',getWorkouts)

//get single workout
router.get('/:id',getWorkout)

//post new workout
router.post('/', createWorkout)

//delete a workout
router.delete('/:id',deleteWorkout)

//update a workout
router.patch('/:id',updateWorkout)

module.exports = router