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

  return (
    <div className="create">
      <h2>Update Workout</h2>
      <p>TODO: Implement this page</p>
    </div>
  );
};

export default EditWorkoutPage;
