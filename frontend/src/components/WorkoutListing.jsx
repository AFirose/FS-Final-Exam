import { Link } from "react-router-dom";

const WorkoutListing = ({ workout }) => {
  return (
    <div className="rental-preview">
      <Link to={`/workouts/${workout._id}`}>
        <h2>{workout.workoutTitle}</h2>
      </Link>
      <p>Price: ${workout.sessionPrice}</p>
      <p>Location: {workout.location?.city}, {workout.location?.state}</p>
      <p>Level: {workout.fitnessLevel}</p>
    </div>
  );
};

export default WorkoutListing;
