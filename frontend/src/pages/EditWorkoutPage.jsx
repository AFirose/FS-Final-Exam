import { useParams, useNavigate } from "react-router-dom";

const EditWorkoutPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // TODO (Q5): Implement this component
  // - Fetch the existing workout from /api/workouts/:id on mount
  // - Create state variables for all form fields (use AddWorkoutPage as reference)
  // - Pre-fill the form with fetched data
  // - On submit: PUT to /api/workouts/:id with the updated data
  //   Build request body same as AddWorkoutPage
  // - Navigate to /workouts/:id on success

    const [workoutTitle, setWorkoutTitle] = useState("");
    const [description, setDescription] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [sessionPrice, setSessionPrice] = useState("");
    const [fitnessLevel, setFitnessLevel] = useState("Beginner");
    const [requiredEquipment, setRequiredEquipment] = useState("");
  

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const res = await fetch(`/api/workouts/${id}`);
        const data = await res.json();
        setWorkoutTitle(data.workoutTitle);
        setDescription(data.description);
        setCity(data.location.city);
        setState(data.location.state);
        setFitnessLevel(data.fitnessLevel);
        setrequiredEquipment(data.requiredEquipment);
      } catch (error) {
        console.error("Error fetching workout:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkout();
  }, [id]);

  const updateWorkout = async (workout) => {
    try {
      const res = await fetch(`/api/workout/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workout),
      });
      if (!res.ok) {
        throw new Error("Failed to update workout");
      }
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  };

  const submitForm = (e) => {
    e.preventDefault();

    const updatedworkout = {
      workoutTitle,
      description,
      location: { city, state },
      sessionPrice: Number(sessionPrice),
      fitnessLevel,
      requiredEquipment,
    };

    updateWorkout(updatedWorkout);
    return navigate(`/workouts/${id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="create">
      <h2>Update a New Workout</h2>
      <form onSubmit={handleSubmit}>
        <label>Workout Title:</label>
        <input
          type="text"
          value={workoutTitle}
          onChange={(e) => setWorkoutTitle(e.target.value)}
          required
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <label>State:</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
        <label>Session Price:</label>
        <input
          type="number"
          step="0.01"
          min="0"
          value={sessionPrice}
          onChange={(e) => setSessionPrice(e.target.value)}
          required
        />
        <label>Fitness Level:</label>
        <select
          value={fitnessLevel}
          onChange={(e) => setFitnessLevel(e.target.value)}
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <label>Required Equipment:</label>
        <input
          type="text"
          value={requiredEquipment}
          onChange={(e) => setRequiredEquipment(e.target.value)}
          required
        />
        <button type="submit">Update Workout</button>
      </form>
    </div>
  );
};

export default EditWorkoutPage;
