import { useParams, useNavigate, Link } from "react-router-dom";

  // TODO (Q4): Implement this component
  // - Fetch the workout from /api/workouts/:id when the component mounts (useEffect)
  // - Store the workout in state (useState)
  // - Display ALL workout fields:
  //   workoutTitle, description,
  //   city, state, session price, fitness level, status,
  //   required equipment
  // - Add a Delete button that sends DELETE to /api/workouts/:id and navigates to "/"
  // - Add an Edit link to /edit-workout/:id

const WorkoutPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const deleteWorkout = async (workoutId) => {
    try {
      const res = await fetch(`/api/workouts/${workoutId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete workout");
      }
      navigate("/");
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const res = await fetch(`/api/workouts/${id}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setBook(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkout();
  }, [id]);

  const onDeleteClick = (workoutId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this workout?"
    );
    if (!confirm) return;

    deleteWorkout(workoutId);
  };

  return (
    <div className="rental-preview">
      <h2>Workout Details</h2>

 {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <h2>{workout.workoutTitle}</h2>
          <p>Description: {workout.description}</p>
          <p>City: {workout.location.city}</p>
          <p>State: {workout.location.state}</p>
          <p>Session Price: {workout.sessionPrice}</p>
          <p>Fitness Level: {workout.fitnessLevel}</p>
          <p>Posted Date: {workout.postedDate}</p>
          <p>Status: {workout.status}</p>
          <p>Required Equipment: {workout.requiredEquipment ? "Yes" : "No"}</p>

          <>
            <button onClick={() => navigate(`/edit-workout/${workout._id}`)}>Edit</button>
            <button onClick={() => onDeleteClick(workout._id)}>Delete</button>
          </>
        </>
      )}

    </div>
  );
};

export default WorkoutPage;
