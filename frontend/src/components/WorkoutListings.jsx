import { useState, useEffect } from "react";
import WorkoutListing from "./WorkoutListing";

const WorkoutListings = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("/api/workouts");
      const data = await res.json();
      setWorkouts(data);
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="rental-list">
      {workouts.map((workout) => (
        <WorkoutListing key={workout._id} workout={workout} />
      ))}
    </div>
  );
};

export default WorkoutListings;
