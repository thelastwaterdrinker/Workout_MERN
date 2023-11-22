const express = require('express')
const {
    createWorkout,
    getWorkout,
    deleteWorkout,
    updateWorkout,
    getWorkouts
} = require('../controllers/workoutController')

const router = express.Router()

//GET ALL workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a new workout
router.delete('/:id', deleteWorkout)

//UPDATE a new workout
router.patch('/:id', updateWorkout)

module.exports = router