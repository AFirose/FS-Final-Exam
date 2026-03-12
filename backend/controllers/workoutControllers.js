const Workout = require("../models/workoutModel");

// GET /api/workouts — ALREADY IMPLEMENTED
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({});
  res.json(workouts);
};

// POST /api/workouts — ALREADY IMPLEMENTED
const createWorkout = async (req, res) => {
  const workout = await Workout.create(req.body);
  res.status(201).json(workout);
};

// TODO (Q1): Implement getWorkoutById
// - Find the workout using req.params.workoutId
// - Return the workout as JSON
// - Return 404 with { error: "Workout not found" } if not found
const getWorkoutById = async (req, res) => {
  res.send("getWorkoutById - not yet implemented");
};

// TODO (Q3): Implement updateWorkout
// - Update the workout by req.params.workoutId using req.body
// - Use options { new: true, runValidators: true }
// - Return the updated workout as JSON
// - Return 404 with { error: "Workout not found" } if not found
const updateWorkout = async (req, res) => {
  res.send("updateWorkout - not yet implemented");
};

// TODO (Q2): Implement deleteWorkout
// - Delete the workout by req.params.workoutId
// - Return the deleted workout as JSON
// - Return 404 with { error: "Workout not found" } if not found
const deleteWorkout = async (req, res) => {
  res.send("deleteWorkout - not yet implemented");
};

module.exports = {
  getAllWorkouts,
  createWorkout,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
};
