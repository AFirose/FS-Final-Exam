import { useParams, useNavigate, Link } from "react-router-dom";

const WorkoutPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // TODO (Q4): Implement this component
  // - Fetch the workout from /api/workouts/:id when the component mounts (useEffect)
  // - Store the workout in state (useState)
  // - Display ALL workout fields:
  //   workoutTitle, description,
  //   city, state, session price, fitness level, status,
  //   required equipment
  // - Add a Delete button that sends DELETE to /api/workouts/:id and navigates to "/"
  // - Add an Edit link to /edit-workout/:id

  return (
    <div className="rental-preview">
      <h2>Workout Details</h2>
      <p>TODO: Implement this page</p>
    </div>
  );
};

export default WorkoutPage;
