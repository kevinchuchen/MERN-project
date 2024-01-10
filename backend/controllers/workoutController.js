const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')


//get all workouts
const getWorkouts = async (req,resp) => {
        const workouts = await Workout.find({}).sort({createdAt: -1})
        resp.status(200).json(workouts)

}

//get single workouts
const getWorkout = async (req,resp) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return resp.status(404).json({error:'No such workout'})
    }
    const workout = await Workout.findById(id)

    if (!workout) {
        return resp.status(404).json({error:'No such workout'})
    }

    resp.status(200).json(workout)
}



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
const deleteWorkout = async (req,resp) =>{
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return resp.status(404).json({error:'No such workout'})
    }
    const workout = await Workout.findOneAndDelete({_id:id})

    if (!workout) {
        return resp.status(404).json({error:'No such workout'})
    }
    resp.status(200).json(workout)

}

//update a workout
const updateWorkout = async (req,resp) =>{


    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return resp.status(404).json({error:'No such workout'})
    }
    const workout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if (!workout) {
        return resp.status(404).json({error:'No such workout'})
    }
    resp.status(200).json(workout)

}


module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}