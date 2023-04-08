import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import workout from '../../assets/images/workout.png';
import "./Workout.scss";

const Workout = () => {
  return (
    <section id="workout">
      <div className="workout container">
        <div className="workout__left">
          <h1>Perfect for indoor and outdoor workouts</h1>
        </div>
        <div className="workout__right">
          <LazyLoadImage
            alt="Again Faster Workout"
            placeholderSrc={workout}
            src={workout}
          />
        </div>
      </div>
    </section>
  );
};

export default Workout;
