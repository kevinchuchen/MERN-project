const Workout = require('../models/workoutModel')

//get all workouts

//get single workouts

//create new workout
const createWorkout = async (req, resp)=>{
    const {title,load,reps} = req.body

    //add doc to db
    try{
        const workout = await Workout.create({title,load,reps})
        resp.status(200).json(workout)
    } catch(error){
        resp.status(400).json({error: error.message})
    }
}


//delete a workout

//update a workout


module.exports={
    createWorkout
}