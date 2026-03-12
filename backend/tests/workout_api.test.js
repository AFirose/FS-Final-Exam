const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const Workout = require("../models/workoutModel");
const User = require("../models/userModel");

const api = supertest(app);

const initialWorkouts = [
  {
    workoutTitle: "Morning HIIT",
    description: "High intensity interval training session",
    location: { city: "Helsinki", state: "Uusimaa" },
    sessionPrice: 25,
    fitnessLevel: "Intermediate",
    requiredEquipment: "None",
  },
  {
    workoutTitle: "Strength Basics",
    description: "Fundamental strength training",
    location: { city: "Tampere", state: "Pirkanmaa" },
    sessionPrice: 30,
    fitnessLevel: "Beginner",
    requiredEquipment: "Dumbbells",
  },
];

beforeEach(async () => {
  await Workout.deleteMany({});
  await User.deleteMany({});
  await Workout.insertMany(initialWorkouts);
});

describe("Workout API", () => {
  // TODO (Q10): Write a test for GET /api/workouts
  // - Verify status code is 200
  // - Verify Content-Type contains application/json
  // - Verify response body is an array with the correct length (matching initialWorkouts)

  // TODO (Q11): Write a test for POST /api/users/signup
  // - Create a valid new user object with all required fields (name, username, password, phone_number, address)
  // - Send a POST request to /api/users/signup
  // - Verify the response status code is 201
  // - Verify the response body contains the correct username
  // - Verify the response body contains a token
});

afterAll(async () => {
  await mongoose.connection.close();
});
