# Exam — Part A: Web Development (2 hours, 270 points)

## Rules

- You may use **any offline material** (your own code, notes, course material).
- **No AI tools** (ChatGPT, Copilot, etc.) and **no internet search** (Google, Stack Overflow, etc.).
- **Make a git commit after each question** with a meaningful commit message (e.g., `Q1: Implement getWorkoutById`).¨

---

**Exam Recording Instructions**

- *Recording Requirement*: The coding session must be recorded on your local machine. Both the Driver and the Navigator record the entire session.
- *Upload Recording*: at the end of the exam

---

**Format:** This exam consists of two parts and will be completed in pairs.
*   **Part 1:** One student will be the **Driver** and the other will be the **Navigator**.
*   **Part 2:** After a short break, you will **switch roles**. The previous Driver will become the Navigator, and the previous Navigator will become the Driver.

**Grading Policy:**
You are being graded on your performance **within your assigned role**, not on the final "outcome" (i.e., whether the code is 100% perfect or finished). 

*   **The Driver** is graded on:
    *   Writing clean code and following syntax rules.
    *   "Thinking out loud" so the Navigator knows what they are doing.
    *   Listening to the Navigator's directions.

*   **The Navigator** is graded on:
    *   **Providing "Tips" and Guidance:** Actively suggesting the next steps and logic.
    *   **Reviewing:** Catching typos or logical errors as the Driver types.
    *   **Strategic Thinking:** Keeping track of the "big picture" (e.g., "Don't forget we need to handle the empty list case next").


---

## Overview

You are given a [*starter code** for a Workout listing application.](https://github.com/FullStack-DP/exam) Some parts are already implemented and working:

**Already working:**
- Backend: `getAllWorkouts` (GET /api/workouts) and `createWorkout` (POST /api/workouts)
- Backend: `signup` (POST /api/users/signup) and `login` (POST /api/users/login)
- Backend: `requireAuth` middleware in `middleware/requireAuth.js`
- Frontend: Home page lists workouts fetched from the API
- Frontend: Add Workout page creates a workout via POST
- Frontend: `useLogin` and `useSignup` hooks in `hooks/` folder

**Your job:** Implement the remaining features described in Sections 1–3 below.

> **Tip:** Study the already-working code to understand the patterns used.

---

## Section 1: Backend Controllers (80 points)

### Q1 — Get Workout by ID (25 pts)

Implement `getWorkoutById` in `backend/controllers/workoutControllers.js`.

- Find the workout using `req.params.workoutId`
- Return the workout as JSON
- Return **404** with `{ error: "Workout not found" }` if no workout is found

**Commit your changes** with message: `Q1: Implement getWorkoutById`

### Q2 — Delete Workout (25 pts)

Implement `deleteWorkout` in `backend/controllers/workoutControllers.js`.

- Delete the workout by `req.params.workoutId`
- Return the deleted workout as JSON
- Return **404** with `{ error: "Workout not found" }` if no workout is found

**Commit your changes** with message: `Q2: Implement deleteWorkout`

### Q3 — Update Workout (30 pts)

Implement `updateWorkout` in `backend/controllers/workoutControllers.js`.

- Update the workout by `req.params.workoutId` using `req.body`
- Use options `{ new: true, runValidators: true }`
- Return the updated workout as JSON
- Return **404** with `{ error: "Workout not found" }` if no workout is found

**Commit your changes** with message: `Q3: Implement updateWorkout`

---

## Section 2: Frontend Pages (110 points)

### Q4 — Workout Detail Page (40 pts)

Implement the `WorkoutPage` component in `frontend/src/pages/WorkoutPage.jsx`.

Requirements:
- Use `useParams()` to get the workout ID from the URL
- Fetch the workout from `/api/workouts/:id` when the component mounts
- Display **all** workout fields:
  - workoutTitle, description
  - City, state
  - Session price, fitness level, status
  - Required equipment
- Add a **Delete** button that:
  - Sends a DELETE request to `/api/workouts/:id`
  - Navigates to `"/"` on success
- Add an **Edit** link that navigates to `/edit-workout/:id`

**Commit your changes** with message: `Q4: Implement WorkoutPage`

### Q5 — Edit Workout Page (40 pts)

Implement the `EditWorkoutPage` component in `frontend/src/pages/EditWorkoutPage.jsx`.

Requirements:
- Use `useParams()` to get the workout ID from the URL
- Fetch the existing workout and **pre-fill** all form fields (use the Add Workout page as reference for the form structure)
- Extract location values from fetched data: `data.location.city`, `data.location.state`
- On submit: send a **PUT** request to `/api/workouts/:id` with the updated data
- Build the request body with the same structure as the Add Workout page
- Navigate to `/workouts/:id` on success

**Commit your changes** with message: `Q5: Implement EditWorkoutPage`

### Q6 — Signup Page (30 pts)

Implement the `SignupPage` component in `frontend/src/pages/SignupPage.jsx`.

A `useSignup` hook is provided in `hooks/useSignup.js`. Study it before starting.

Requirements:
- Import and use the `useSignup` hook
- Create state for all required user fields: `name`, `username`, `password`, `phone_number`, `address`
- On form submit, call `signup({ name, username, password, phone_number, address })`
- Display the error from the hook if present (red text)
- Disable the submit button while `isLoading` is true
- Navigate to `"/"` on successful signup
- The form should have:
  - Name text input (required)
  - Username text input (required)
  - Password input (required)
  - Phone Number text input (required)
  - Address text input (required)
  - Submit button with text "Sign Up"

**Commit your changes** with message: `Q6: Implement SignupPage`

---

## Section 3: Authentication & Protection (80 points)

### Q7 — Protect Backend Routes (25 pts)

A `requireAuth` middleware is already provided in `backend/middleware/requireAuth.js`. Study it to understand what it does.

In `backend/routes/workoutRouter.js`, add the `requireAuth` middleware to protect the following routes:
- POST `/` (createWorkout)
- PUT `/:workoutId` (updateWorkout)
- DELETE `/:workoutId` (deleteWorkout)

Leave GET routes **unprotected** (anyone can read workouts).

You will need to import `requireAuth` from the middleware file.

**Commit your changes** with message: `Q7: Protect backend routes`

### Q8 — Conditional Navbar & Frontend Auth (30 pts)

Update the `Navbar` component in `frontend/src/components/Navbar.jsx` to show different links based on whether the user is logged in.

The `useLogin` and `useSignup` hooks save `user` and `token` to localStorage. Use this to determine login state.

Requirements:
- Check `localStorage` for a saved user/token
- **When logged in**, the Navbar should show:
  - Home link
  - Add Workout link
  - A **Logout** button that clears localStorage and navigates to `"/"`
  - The logged-in user's name (e.g., `Welcome, {name}`)
- **When not logged in**, the Navbar should show:
  - Home link
  - Signup link
  - Login link
- Also update the **AddWorkoutPage** to include the Authorization header in the POST request:
  ```js
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("token")}`,
  }
  ```

**Commit your changes** with message: `Q8: Conditional Navbar and frontend auth`

### Q9 — Login Page (25 pts)

Implement the `LoginPage` component in `frontend/src/pages/LoginPage.jsx`.

A `useLogin` hook is provided in `hooks/useLogin.js`. Study it before starting.

Requirements:
- Import and use the `useLogin` hook
- Create state for `username` and `password`
- On form submit, call `login(username, password)` from the hook
- Display the error from the hook if present (red text)
- Disable the submit button while `isLoading` is true
- Navigate to `"/"` on successful login
- The form should have:
  - Username text input (required)
  - Password input (required)
  - Submit button with text "Login"

**Commit your changes** with message: `Q9: Implement LoginPage`

---

## Summary

| Question | Topic | Points |
|----------|-------|--------|
| Q1 | getWorkoutById | 25 |
| Q2 | deleteWorkout | 25 |
| Q3 | updateWorkout | 30 |
| Q4 | WorkoutPage (detail + delete + edit) | 40 |
| Q5 | EditWorkoutPage (fetch + form + PUT) | 40 |
| Q6 | SignupPage (useSignup hook) | 30 |
| Q7 | Protect backend routes | 25 |
| Q8 | Conditional Navbar + frontend auth | 30 |
| Q9 | LoginPage (useLogin hook) | 25 |
| **Total** | | **270** |
